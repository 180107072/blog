import { allWorks } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx/MDXComponents";

import css from "./page.module.scss";
import Link from "next/link";

export default function Works() {
  return (
    <article className={css.container}>
      {allWorks.map((work) => (
        <div
          className={css.work}
          key={work._id}
          style={{
            position: "relative",
          }}
        >
          <Mdx code={work.body.code} />
          {work.post ? (
            <Link href={`/posts/${work.post}`} className={css.postLink}>
              Read post
            </Link>
          ) : null}
        </div>
      ))}
    </article>
  );
}
