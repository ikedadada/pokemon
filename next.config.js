/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env:{
    BIGQUERY_PROJECT_ID: process.env.BIGQUERY_PROJECT_ID,
    BIGQUERY_DATASET_ID: process.env.BIGQUERY_DATASET_ID
  }
}

module.exports = nextConfig