module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/view/dashboard',
        permanent: true,
      },
    ]
  },
}
