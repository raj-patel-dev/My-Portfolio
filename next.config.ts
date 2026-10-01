import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {},
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  // MDX paths are built from process.cwd() at request time; include them so
  // Vercel serverless traces do not miss content files.
  outputFileTracingIncludes: {
    "/*": [
      "./src/app/blog/posts/**/*.mdx",
      "./src/app/work/projects/**/*.mdx",
    ],
  },
};

export default withMDX(nextConfig);
