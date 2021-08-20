import Link from 'next/link';
import React from 'react';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.logo} title="Blog Exiospace"></a>
        </Link>
        <nav>
          <ActiveLink activeClassname={styles.active} href="/">
            <a className={styles.active} >Home</a>
          </ActiveLink>
          <ActiveLink activeClassname={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <div className={styles.socialShare}>
          <Link href="" >
            <a target="_blank"><RiFacebookBoxFill size="25" /></a>
          </Link>
          <Link href="" >
            <a target="_blank"><RiInstagramLine size="25" /></a>
          </Link>
        </div>
      </div>
    </header>
  );
}