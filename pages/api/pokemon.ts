// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BigQuery } from '@google-cloud/bigquery'
import credential from '../../gcloud-key.json'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const projectId = process.env.BIGQUERY_PROJECT_ID
    const datasetId = process.env.BIGQUERY_DATASET_ID
    const option = {
      projectId,
      credentials: credential
    }
    const bigQueryClient = new BigQuery(option)
    const sqlQuery = `SELECT * FROM \`${datasetId}.pokemon\``;
    const options = {
      query: sqlQuery,
      location: 'asia-northeast1'
    };
  
    const [rows] = await bigQueryClient.query(options);
    res.status(200).json(rows)
  }catch(e){
    console.warn(e)
    if(e instanceof Error) return res.status(400).json({e:e.message})
    res.status(500).json({server:'Error'})
  }

}
