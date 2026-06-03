import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/types";

function formatPublishedDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function truncateExcerpt(text: string, maxLength = 110) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

export default function BlogCard({ post }: { post: Blog }) {
  const publishedDate = formatPublishedDate(post.published_at);
  const postHref = `/blog/${post.slug}`;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <Link
        href={postHref}
        aria-label={`Read more about ${post.title}`}
        className="relative block overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={240}
          loading="lazy"
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <time
          dateTime={post.published_at}
          className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-indigo-800 shadow-sm backdrop-blur-sm"
        >
          <svg
            className="h-3.5 w-3.5 shrink-0 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 2v3M16 2v3M4 9h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {publishedDate}
        </time>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {post.category ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {post.category}
          </p>
        ) : null}

        <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-indigo-800 md:text-xl">
          <Link href={postHref} aria-label={`Read more about ${post.title}`}>
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {truncateExcerpt(post.excerpt)}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-xs text-gray-500">By {post.author}</span>
        </div>
      </div>
    </article>
  );
}
