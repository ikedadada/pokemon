// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as dotenv from 'dotenv'
import { BigQuery } from '@google-cloud/bigquery'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const r = await fetch('https://www.google.com')
  const j = await r.text()

  res.status(200).json({success:j})
}
