module.exports = {
  webpack: ( config: { resolve: { fallback: any; }; }, { isServer }: any ) => {
    if ( !isServer ) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  },
};
