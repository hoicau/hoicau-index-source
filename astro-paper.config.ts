import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://hoicau.com",
    title: "澈海秋光",
    description: "澈海秋光的个人博客 — notes, writing and projects.",
    author: "澈海秋光",
    profile: "https://github.com/hoicau",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Singapore",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/hoicau/hoicau-index-source/edit/main/",
    },
  },
  socials: [
    { name: "github", url: "https://github.com/hoicau" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
  ],
});