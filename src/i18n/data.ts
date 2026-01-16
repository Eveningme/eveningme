export const content = {
  zh: {
    title: '周超然',
    description: '程序员、摄影爱好者、自由人',
    lang: 'zh',
    links: [
      { label: '个人网站', url: 'https://evening.me' },
      { label: '经典博客', url: 'https://eveningme.com' },
      { label: 'GitHub', url: 'https://github.com/Eveningme' },
    { label: 'Instagram', url: 'https://instagram.com/eveningme' },
    { label: 'YouTube', url: 'https://youtube.com/@Eveningme' },
    { label: 'Yesterday (社交)', url: 'https://yesterday.me/@Eveningme' },
    ],
  },
  ja: {
    title: '周 超然',
    description: 'プログラマー・写真家・自由人',
    lang: 'ja',
    links: [
      { label: 'ポータル', url: 'https://evening.me' },
      { label: '旧ブログ', url: 'https://eveningme.com' },
      { label: 'GitHub', url: 'https://github.com/Eveningme' },
      { label: 'Instagram', url: 'https://instagram.com/eveningme' },
      { label: 'YouTube', url: 'https://youtube.com/@Eveningme' },
      { label: 'Yesterday (ソーシャル)', url: 'https://yesterday.me/@Eveningme' },
    ],
  },
  en: {
    title: 'Travis Chow',
    description: 'Programmer, Photographer, Independent',
    lang: 'en',
    links: [
      { label: 'Portal', url: 'https://evening.me' },
      { label: 'Legacy Blog', url: 'https://eveningme.com' },
      { label: 'GitHub', url: 'https://github.com/Eveningme' },
      { label: 'Instagram', url: 'https://instagram.com/eveningme' },
      { label: 'YouTube', url: 'https://youtube.com/@Eveningme' },
      { label: 'Yesterday (Social)', url: 'https://yesterday.me/@Eveningme' },
    ],
  },
} as const;

export type Locale = keyof typeof content;
