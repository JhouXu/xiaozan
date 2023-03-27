import { navItem } from "./types";

let id = 1;
const media: navItem[] = [
  {
    id: id++,
    text: "isorepublic",
    link: "https://isorepublic.com/",
    desc: "成千上万的免费高分辨率库存CC0照片和视频",
    type: "图片 视频",
  },
  {
    id: id++,
    text: "footage123",
    link: "https://footage123.com/",
    desc: "正在全世界提供无人机的独家免费高清和4K视频",
    type: "图片 视频",
  },
  {
    id: id++,
    text: "Pexels",
    link: "https://www.pexels.com/zh-tw/",
    desc: "創作者分享的最佳免費圖庫相片，以及免權利金的影像和影片",
    type: "图片 视频",
  },

  {
    id: id++,
    text: "Pixabay",
    link: "https://pixabay.com",
    desc: "免费正版高清图片素材库",
    type: "图片",
  },
  {
    id: id++,
    text: "Splitshire",
    link: "https://www.splitshire.com",
    desc: "Beautiful & exclusive free stock photos.",
    type: "图片",
  },
  {
    id: id++,
    text: "movie-screencaps",
    link: "https://movie-screencaps.com/",
    desc: "专门收集电影影视剧截图的网站,方便我们后期调色做参考",
    type: "图片",
  },
  {
    id: id++,
    text: "Burst",
    link: "https://burst.shopify.com/",
    desc: "下载令人惊叹的照片供网站和商业使用",
    type: "图片",
  },
  {
    id: id++,
    text: "skitterphoto",
    link: "https://skitterphoto.com/",
    desc: "一个查找、显示和共享公共域照片的地方",
    type: "图片",
  },
  {
    id: id++,
    text: "foodiesfeed",
    link: "https://www.foodiesfeed.com/",
    desc: "这个网站所有的图片都和美食相关",
    type: "图片",
  },
  {
    id: id++,
    text: "CC0图片库",
    link: "www.cc0.cn",
    desc: "这个虽然是个聚合站，但是有些时候还是有些作用滴~",
    type: "图片",
  },
  {
    id: id++,
    text: "Pixabay",
    link: "https://pixabay.com/zh/",
    desc: "免费正版高清图片素材库。Pixabay拥有超过2.8百万张优质图片和视频素材，让你轻松应对各种设计场景",
    type: "图片",
  },
  {
    id: id++,
    text: "Unsplash",
    link: "https://unsplash.com",
    desc: "互联网的视觉来源，由世界各地的创造者提供动力",
    type: "图片",
  },
  { id: id++, text: "Life of pix", link: "https://www.lifeofpix.com", desc: "免费高分辨率摄影", type: "图片" },
  { id: id++, text: "footage123", link: "https://stocksnap.io/", desc: "美丽的免费库存照片", type: "图片" },

  {
    id: id++,
    text: "Pexels",
    link: "https://www.pexels.com/videos",
    desc: "Pexels社区共享的最佳免费股票视频。",
    type: "视频",
  },
  {
    id: id++,
    text: "Life of Vids",
    link: "https://www.lifeofvids.com/",
    desc: "Free Videos, Clips & Loops",
    type: "视频",
  },
  {
    id: id++,
    text: "Videezy",
    link: "https://www.videezy.com/",
    desc: "免费高清库存镜头和4K视频，无pro标志则为免费",
    type: "视频",
  },
  { id: id++, text: "Mixkit", link: "https://mixkit.co", desc: "为您的下一个视频项目提供免费资产", type: "视频" },
  { id: id++, text: "Vidlery", link: "http://vidlery.com/", desc: "艺术无处不在，免费动画视频背景", type: "视频" },
  { id: id++, text: "Coverr", link: "https://coverr.co/", desc: "美丽的免费库存视频镜头", type: "视频" },
  { id: id++, text: "Mazwai", link: "http://mazwai.com", desc: "手工采摘的库存视频镜头", type: "视频" },
  { id: id++, text: "Ignite Motion", link: "https://www.ignitemotion.com", desc: "自由运动背景", type: "视频" },
  {
    id: id++,
    text: "Vidsplay",
    link: "https://www.vidsplay.com/",
    desc: "Download Free Stock Video Footage",
    type: "视频",
  },

  {
    id: id++,
    text: "Youtube Audio Library",
    link: "https://studio.youtube.com/channel/UCpUDC4OkmFCGv8BFVKHOh_w/music",
    desc: "Youtube创作者平台",
    type: "音频",
  },
  {
    id: id++,
    text: "",
    link: "https://business.facebook.com/creatorstudio/?tab=ct_sound_collection&collection_id=all_pages",
    desc: "Facebook创作者平台",
    type: "音频",
  },
  {
    id: id++,
    text: "SoundCloud",
    link: "https://soundcloud.com/discover",
    desc: "",
    type: "音频",
  },
  {
    id: id++,
    text: "SoundJay",
    link: "https://www.soundjay.com/",
    desc: "",
    type: "音频",
  },
  {
    id: id++,
    text: "BBC Sound Effects",
    link: "http://bbcsfx.acropolis.org.uk/",
    desc: "",
    type: "音频",
  },
  {
    id: id++,
    text: "Free PD",
    link: "https://freepd.com/",
    desc: "",
    type: "音频",
  },
  {
    id: id++,
    text: "Freesound（情绪状态和风格检索）",
    link: "https://freesound.org/",
    desc: "",
    type: "音频",
  },
  {
    id: id++,
    text: "Audiolibrary",
    link: "https://www.audiolibrary.com.co",
    desc: "",
    type: "音频",
  },
  {
    id: id++,
    text: "Free Stock Music",
    link: "https://www.free-stock-music.com/",
    desc: "",
    type: "音频",
  },

  {
    id: id++,
    text: "书生CG资源站",
    link: "https://c4dsky.com/",
    desc: "",
    type: "模板插件",
  },
  {
    id: id++,
    text: "大众脸",
    link: "https://www.lookae.com/",
    desc: "",
    type: "模板插件",
  },
  {
    id: id++,
    text: "VIDEEZY",
    link: "https://www.videezy.com/after-effects-templates",
    desc: "Free After Effects Templates",
    type: "模板插件",
  },
  {
    id: id++,
    text: "ayatoweb",
    link: "http://www.ayatoweb.com/",
    desc: "日本的一个免费网站",
    type: "模板插件",
  },
];

export default media;
