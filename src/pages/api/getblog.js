// http://localhost:3005/api/getblog?slug=how-to-learn-javascript
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
    // console.log(req.query.slug);
    if(err) {
      console.log(err);
      return res.status(500).json({ error: "No such Blog found!" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
