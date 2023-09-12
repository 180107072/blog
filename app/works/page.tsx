import { allWorks } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-components";

import css from "./page.module.scss";

export default function Posts() {
  return (
    <div className={css.pageWrapper}>
      {allWorks.map((post) => (
        <article key={post._id}>
          <Mdx code={post.body.code} />
        </article>
      ))}
    </div>
  );
}
