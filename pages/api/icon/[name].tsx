import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
type Data = {
  paths: object;

};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const paths = req.query;
  const file_path = path.join(process.cwd(), `/public/svg/${paths.name}.svg`);
  try {
    const data:any = fs.readFileSync(file_path);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(data);
    }
    catch (err) {
        
        res.status(404).send("Not found");
        }

}
