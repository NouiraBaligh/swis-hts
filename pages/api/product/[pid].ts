import products from '../../../utils/data/products';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req;

  switch (req.method) {
    case 'GET':
      const product = products.find(x => x.id === pid);
      if (product) {
  res.setHeader('Cache-Control', 'public, max-age=0'); 
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: `Product with ID ${pid} not found` });
      }
      break;
    case 'POST':
      // Handle POST request
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
};