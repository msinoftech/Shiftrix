"use client";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/types";
import { BASE_URL } from "@/lib/config";
import { getPublishedBlogsByDate } from "@/lib/data";
import FaqSection from "@/components/FaqSection";

const ANCHOR_EXTRA_OFFSET = 20;

interface BlogDetailsProps {
  post: Blog;
  blogs: Blog[];
}

function getStickyHeaderHeight(): number {
  const header = document.querySelector("header");
  if (!header) return 100;
  const navBar = header.children[1] as HTMLElement | undefined;
  return (navBar?.offsetHeight ?? 80) + ANCHOR_EXTRA_OFFSET;
}

export default function BlogDetails({ post, blogs }: BlogDetailsProps) {
  const otherBlogs = getPublishedBlogsByDate().filter((b) => b.slug !== post.slug);
  const faqItems = post.faq ?? [];
  const postContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToAnchor = useCallback((id: string, updateHash = true) => {
    const target = document.getElementById(id);
    if (!target) return;

    const offset = getStickyHeaderHeight();
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

    if (updateHash) {
      history.pushState(null, "", `#${id}`);
    }
  }, []);

  useEffect(() => {
    const syncScrollOffset = () => {
      const offset = getStickyHeaderHeight();
      sectionRef.current?.style.setProperty("--anchor-scroll-offset", `${offset}px`);
    };

    syncScrollOffset();
    window.addEventListener("resize", syncScrollOffset);
    window.addEventListener("scroll", syncScrollOffset, { passive: true });

    return () => {
      window.removeEventListener("resize", syncScrollOffset);
      window.removeEventListener("scroll", syncScrollOffset);
    };
  }, []);

  useEffect(() => {
    const contentEl = postContentRef.current;
    if (!contentEl) return;

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!anchor || !contentEl.contains(anchor)) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      scrollToAnchor(id);
    };

    contentEl.addEventListener("click", handleAnchorClick);
    return () => contentEl.removeEventListener("click", handleAnchorClick);
  }, [scrollToAnchor]);

  useEffect(() => {
    const scrollFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      setTimeout(() => scrollToAnchor(decodeURIComponent(hash), false), 150);
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, [scrollToAnchor]);

  return (
    <section ref={sectionRef} className="details-page sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
      <div className="max-w-7xl px-4 mx-auto">
        <h1 className="text-3xl font-bold pb-12">{post.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE - Blog Details */}
          <div className="lg:col-span-2">
            <Image src={post.image} alt={post.title} width={900} height={500} className="rounded-xl mb-6 aspect-[16/8] object-cover"/>
            <div
              ref={postContentRef}
              className="post-content space-y-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
             {/* FAQ Section - only show when post has FAQ items */}
             {faqItems.length > 0 && (
                <div className="mt-10" id="frequently-asked-questions">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <FaqSection items={faqItems.map((faq) => ({ id: faq.id, title: faq.question, content: faq.answer }))} />
                  </div>
                </div>
              )}
          </div>

          {/* RIGHT SIDE - Other Blogs */}
          <aside className="h-fit sticky top-20">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}