// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { BigQuery, JobLoadMetadata } from '@google-cloud/bigquery'
import credential from '../../gcloud-key.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectId = process.env.BIGQUERY_PROJECT_ID
  const datasetId = process.env.BIGQUERY_DATASET_ID
  const ver = "3"
  res.status(200).json({projectId:projectId || "なし",datasetId: datasetId || "なし",ver})
}
