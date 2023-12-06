const footerData: {
  phone: string;
  email: string;
  socialMedias: {
    name:
      | 'WhatsApp'
      | 'Instagram'
      | 'Facebook'
      | 'Linkedin'
      | 'Twitter'
      | 'Youtube'
      | 'Github'
      | 'Telegram'
      | 'Discord'
      | 'Snapchat'
      | 'TikTok'
      | 'Twitch';
    url: string;
  }[];
} = {
  phone: '(11) 93015-3155',
  email: 'Marcelo.lima@malisiengenharia.com.br',
  socialMedias: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
  ],
};

export { footerData };
