import fs from "fs";
import { POSTS } from "../src/lib/post";

const BASE_URL = "https://born2flirt.in";

const staticPages = [
  "",
  "/indian-discord-server",
  "/about",
  "/features",
  "/events",
  "/blog",
  "/top-indian-discord-servers",
  "/vote",
  "/live-activity",
];

const generateSitemap = () => {
  const urls: string[] = [];

  // Static pages
  staticPages.forEach((page) => {
    urls.push(`
      <url>
        <loc>${BASE_URL}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === "" ? "1.0" : "0.9"}</priority>
      </url>
    `);
  });

  // Blog posts
  POSTS.forEach((post) => {
    urls.push(`
      <url>
        <loc>${BASE_URL}/blog/${post.slug}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated!");
};

generateSitemap();