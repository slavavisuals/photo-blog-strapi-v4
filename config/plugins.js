module.exports = ({env}) => ({
  graphql: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  upload: {
      provider: "cloudinary",
      providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {

          upload: {
    
            folder: "posts",
    
            use_filename: true,
    
            unique_filename: false
    
          }
      }
  }
})