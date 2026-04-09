import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/types";
import { BASE_URL  } from "@/lib/config";

export default function BlogCard({ post }: { post: Blog }) {
  return (
      <div className="group w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <Link href={`${BASE_URL}/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
            <Image src={post.image} alt={post.title} width={400} height={200} loading="lazy" className="w-full object-cover aspect-3/2 mb-4"/>
        </Link>
        <div className="p-5 space-y-3">
            <div className="text-xl font-bold text-gray-900"><Link href={`${BASE_URL}/blog/${post.slug}`} aria-label={`Read more about ${post.title}`} className="group-hover:text-indigo-800">{post.title}</Link></div>
            <p>{post.excerpt.slice(0, 100)}...</p>
            <Link href={`${BASE_URL}/blog/${post.slug}`} role="button" aria-label={`Read more about ${post.title}`} className="inline-flex items-center gap-2 group-hover:text-indigo-800 group-hover:scale-105 transition">
                Read more →
            </Link>
        </div>
      </div>
  );
}
