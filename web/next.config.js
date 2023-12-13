/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  reactDevOverlay: false,
  eslint: {
    dirs: [
      'apis',
      'app',
      'components',
      'contexts',
      'features',
      'hooks',
      'pages',
      'types',
    ],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(bin|glb|gltf|json|mp3|wav)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })

    config.devServer = {
      client: {
          overlay: false
      }
    }

    return config
  },

}

module.exports = nextConfig
