import { Request, Response } from "express";


export const getData = (req: Request, res: Response) => {
  const data = {
    type: "xAPI",
    source: "provider"    
  }
  console.log('getResponse', data);
  res.json(data);
};

export const postData = (req: Request, res: Response) => {
  console.log('postBody', req.body);
  res.json({ status: "success", received: req.body });
};