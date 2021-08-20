import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import styles from './post.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Blog da Exiospace 💙</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href="/">
              <a className={styles.post}>
                <img src="/post_01.png" alt="Post" />
                <div className={styles.postContent}>
                  <span>{post.updatedAt}</span>
                  <h1>
                    {post.title}
                  </h1>
                  <p>{post.excerpt}..</p>
                  <p>Por <span>Equipe Exiospace 💙</span></p>
                </div>
              </a>
            </Link>
          ))}

        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  console.log(posts);

  return {
    props: { posts }
  }
}