/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose'],
        esmExternals: 'loose'
    },
    images: {
        domains: ['images.openfoodfacts.org']
    }
}

module.exports = nextConfig
