import * as fs from 'fs';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    // console.log('Received contact form data:', req.body);
    let data = await fs.promises.readdir('contactdata');
    // console.log('Files in contactdata:', data);
    fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body));
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}