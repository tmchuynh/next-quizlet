// next.config.js
module.exports = {
  webpack: ( config: { resolve: { fallback: any; }; }, { isServer }: any ) => {
    if ( !isServer ) {
      // Exclude 'fs' module from client-side bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};
