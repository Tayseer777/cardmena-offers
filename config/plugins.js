module.exports =({env}) => ({
    // ...
    // 'link-button': {
    //   enabled: true,
    //   resolve: './src/plugins/link-button'
    // },
    // upload: {
    //   config: {
    //     provider: 'aws-s3',
    //     providerOptions: {
    //       accessKeyId: env('AWS_ACCESS_KEY_ID'),
    //       secretAccessKey: env('AWS_ACCESS_SECRET'),
    //       region: env('AWS_REGION'),
    //       params: {
    //         Bucket: env('AWS_BUCKET'),
    //       },
    //     },
    //     actionOptions: {
    //       upload: {},
    //       uploadStream: {},
    //       delete: {},
    //     },
    //   },
    // },
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::offer.offer',
            draft: {
              url: 'http://localhost:8888/api/offers',
              query: {
                type: 'offer',
                id: '{id}',
              },
            },
            published: {
              url: 'https://cardmenaoffers.netlify.app/offers/{id}',
            },
          },
          // {
          //   uid: 'api::client.client',
          //   draft: {
          //     url: 'http://localhost:1337/api/clients',
          //     query: {
          //       type: 'client',
          //       id: '{id}',
          //     },
          //   },
          //   published: {
          //     url: 'http://offers.vuedale.com/client/{slug}',
          //   },
          // },
        ],
      },
    },
    // ...
  })