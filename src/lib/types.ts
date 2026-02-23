export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  content: string;
  status: string;
  author: string;
  published_at: string;
  updated_at: string;
  keywords: string;
  metaTitle: string;
  metaDesc: string;
}

export interface testimonial {
  name: string;
  content: string;
}

export interface faqItems {
  title: string;
  content: string;
}

export interface whyhire {
  title: string;
  content: string;
  image: string;
}
