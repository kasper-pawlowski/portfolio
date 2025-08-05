import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
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
