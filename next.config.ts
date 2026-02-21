import type { NextConfig } from "next";
import withMDXGenerator from "@next/mdx";

const withMDX = withMDXGenerator({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

export default withMDX(nextConfig);
