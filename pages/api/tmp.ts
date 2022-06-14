// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import * as fs from 'fs'
import {parse} from 'csv-parse/sync'
import { BigQuery, JobLoadMetadata } from '@google-cloud/bigquery'
import credential from '../../gcloud-key.json'
import { JSONParser } from 'formidable/parsers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const json = JSON.parse(req.body)
    const ndJson = json.map(JSON.stringify).join('\n');
    fs.writeFileSync('/tmp/test.jsonl', ndJson);
    const projectId = process.env.BIGQUERY_PROJECT_ID
    const datasetId = process.env.BIGQUERY_DATASET_ID
    const option = {
      projectId,
      credentials: credential
    }
    const bigQueryClient = new BigQuery(option)
    const metadata: JobLoadMetadata = {
      sourceFormat: 'NEWLINE_DELIMITED_JSON',
      schema: {
        fields: [
          { name : "no", type : "INTEGER" },
          { name : "name", type: "STRING"},
          { name : "stage", type: "INTEGER"},
          { name : "types", type: "STRING"},
          { name : "color", type: "STRING"}
        ]
      },
      autodetect: false // autodetectがtrueだと、テーブルが無ければ勝手に作られる。
    }

    const t = await bigQueryClient.dataset('test_pokemon').table('pokemon').load('/tmp/test.jsonl',metadata)    

    res.status(200).json({success:JSON.stringify(t)})
    console.log('返した')
  }catch(e){
    console.warn(e)
    res.status(400).json({e})
  }

  console.log('ファイルあった')

}
