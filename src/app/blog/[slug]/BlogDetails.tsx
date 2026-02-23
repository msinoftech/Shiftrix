"use client";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/types";
import { BASE_URL } from "@/lib/config";

interface BlogDetailsProps {
  post: Blog;
  blogs: Blog[];
}

export default function BlogDetails({ post, blogs }: BlogDetailsProps) {
  const otherBlogs = blogs.filter((b) => b.slug !== post.slug);
  return (
    <section className="details-page sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
      <div className="max-w-7xl px-4 mx-auto pt-6 sm:pt-6 md:pt-6 lg:pt-6">
        <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">{post.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE - Blog Details */}
          <div className="lg:col-span-2">
            <Image src={post.image} alt={post.title} width={900} height={500} className="rounded-xl mb-6 aspect-[16/8] object-cover"/>
            <div className="post-content text-gray-700 leading-relaxed mb-6 " dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>

          {/* RIGHT SIDE - Other Blogs */}
          <aside className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-fit sticky top-20">
            <div className="text-xl font-semibold mb-4 text-gray-800">Recent Posts</div>
            <ul className="space-y-6">
              {otherBlogs.map((item) => (
                <li key={item.slug}>
                  <Link href={`${BASE_URL}/blog/${item.slug}`} className="flex items-center space-x-3 group">
                    <div className="w-16 h-16 flex-shrink-0">
                      <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-lg object-cover w-full h-full"/>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 group-hover:text-indigo-600 transition">{item.title}</h3>
                      <p className="text-sm line-clamp-2">{item.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
