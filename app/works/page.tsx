import { allWorks } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx/MDXComponents";

import css from "./page.module.scss";
import Link from "next/link";

export default function Works() {
  return (
    <div className={css.pageWrapper}>
      {allWorks.map((work) => (
        <article key={work._id}>
          <Mdx code={work.body.code} />
          <span className={css.articleDescription}>
            <h1>{work.title}</h1>
            <p>{work.description}</p>
            {work.post ? (
              <Link href={`/posts/${work.post}`} className={css.postLink}>
                Read post
              </Link>
            ) : null}
          </span>
        </article>
      ))}
    </div>
  );
}
