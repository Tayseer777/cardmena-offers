module.exports = [
  'strapi::errors',
   {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'naffasy.s3.us-east-1.amazonaws.com',
            'http://localhost:8888/',
            "https://vuedaleoffers.netlify.app/",
            "https://naffasy.s3.amazonaws.com/thumbnail_Group_3622_dcb389cb3b.png"
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'naffasy.s3.us-east-1.amazonaws.com',
            'http://localhost:8888/',
            "https://vuedaleoffers.netlify.app/",
            "https://naffasy.s3.amazonaws.com/thumbnail_Group_3622_dcb389cb3b.png"
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
