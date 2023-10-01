import dynamic from "next/dynamic";
import { FC, Suspense } from "react";

import css from "./page.module.scss";
import { allPosts } from "@/.contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx/MDXComponents";
import { notFound } from "next/navigation";

interface PostProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostProps) {
  const post = getPostFromParams(params);

  if (!post) return notFound();

  return (
    <Suspense fallback={<p className="text-white">LOADING</p>}>
      <article className={css.articleContainer}>
        <div>
          <b className="text-sm">{post.title}</b>
          <p className={css.articleDescription}>{post.description}</p>

          <p className="text-xs text-slate-500">
            {new Date(post.date).toDateString()}
          </p>
        </div>

        <Mdx navigation code={post.body.code} />
      </article>
    </Suspense>
  );
}
