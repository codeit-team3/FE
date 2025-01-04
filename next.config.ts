import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
      'codeit-bookco.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  instrumentation: {
    enabled: true,
  },
};

export default nextConfig;
