"use client";

import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

import css from "./page.module.scss";
import { motion } from "framer-motion";

export default function Posts() {
  return (
    <div className={css.allPostsContainer}>
      {allPosts.map((post) => (
        <article key={post._id} className={css.articleContainer}>
          <Link
            href={post.slug}
            className={css.articleTitle}
            suppressHydrationWarning
          >
            {post.title}
          </Link>
          <motion.span
            layout
            className={css.articleDescription}
            suppressHydrationWarning
          >
            {post.description}
          </motion.span>

          <motion.span layout className={css.divider} />

          <span className={css.articleDate}>
            {new Date(post.date).getFullYear()}
          </span>
        </article>
      ))}
    </div>
  );
}
