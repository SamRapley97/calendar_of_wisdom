/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION,
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      staticFolder: '/static',
    },
};



export default nextConfig;
