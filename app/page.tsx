"use client";

import { allPosts } from "@/.contentlayer/generated";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className={`prose ${isDark ? "bg-slate-400" : "bg-slate-700"}`}>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
