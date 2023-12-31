import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

import css from "./page.module.scss";

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
          <span className={css.articleDescription}>{post.description}</span>

          <span className={css.divider} />

          <span className={css.articleDate}>
            {new Date(post.date).getFullYear()}
          </span>
        </article>
      ))}
    </div>
  );
}
