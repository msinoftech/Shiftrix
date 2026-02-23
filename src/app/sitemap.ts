import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/config';
import { blogs } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      priority: 0.8,
    },
    // Service main page
    {
      url: `${BASE_URL}/services`,
      priority: 0.8,
    },
    // Service details
    {
      url: `${BASE_URL}/services/commercial-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/residential-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/full-service-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/furniture-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/local-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/long-distance-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/man-with-a-van`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/piano-movers`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/specialty-movers`,
      priority: 0.7,
    },
    // Blog details pages (dynamically from blogs array)
    ...blogs.filter(b => b.status === 'published').map(b => ({
      url: `${BASE_URL}/blog/${b.slug}`,
      priority: 0.7,
    }))
  ];
}
