
import { serverQueryContent } from "#content/server"
import RSS from 'rss';

export default defineEventHandler(async (event) => {
	const feed = new RSS({
		title: 'mayer.sh - blog',
		site_url: 'https://mayer.sh/',
		feed_url: 'https://mayer.sh/rss.xml'
	});

	const posts = await serverQueryContent(event)
		.sort({ date: -1 })
		.where({ _partial: false, _path: { $regex: /^\/blog\// } })
		.find();

	for (const post of posts) {
		feed.item({
			title: post.title ?? "",
			description: post.description ?? "",
			url: `https://mayer.sh${post._path}`,
			date: post.date,
		});
	}

	event.node.res.setHeader('Content-Type', 'application/rss+xml');
	event.node.res.end(feed.xml());
});