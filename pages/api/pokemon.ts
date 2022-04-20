// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BigQuery } from '@google-cloud/bigquery'
import credential from '../../gcloud-key.json'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const option = {
    projectId: 'hallowed-garden-346310',
    credentials: credential
  }
  const bigQueryClient = new BigQuery(option)
  const sqlQuery = `SELECT * FROM \`hallowed-garden-346310.test_pokemon.pokemon\``;
  const options = {
    query: sqlQuery,
    location: 'asia-northeast1'
  };

  const [rows] = await bigQueryClient.query(options);

  res.status(200).json(rows)
}
