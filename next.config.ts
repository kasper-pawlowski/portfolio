import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        // customize default plugin options
                        removeViewBox: false
                      }
                    }
                  },
                  'removeDimensions'
                ]
              }
            }
          }
        ],
        as: '*.js'
      }
    }
  }
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
