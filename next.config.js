/* eslint-disable */
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {};
  }
  const withSass = require('@zeit/next-sass');

  return withSass({
    cssModules: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/speaker': { page: '/speaker' },
        '/events': { page: '/events' },
        '/timeline': { page: '/timeline' },
        '/sponsor': { page: '/sponsor' },
        '/startup': { page: '/startup' },
        '/register': { page: '/register' },
        '/challenge': { page: '/challenge' }
      };
    }
  });
};
