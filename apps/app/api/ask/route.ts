import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { question } = req.body;
      
      // Here, we ll  call our AI service or CoinGecko API
      const answer = `Here's a mock answer for: "${question}"`;

      res.status(200).json({ answer });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process the request' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}