import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: 'Praveen Kumar Yennam — Blog',
    description: 'Occasional notes on software development from Praveen Kumar Yennam.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}/blog/${post.id}/`,
    })),
  });
}
