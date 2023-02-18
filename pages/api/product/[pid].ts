import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../utils/data/products';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid, timestamp },
  } = req;

  const product = products.find((x) => x.id === pid);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  // If a timestamp is provided, set the Cache-Control header to 0 seconds
  // to ensure that the browser always fetches the latest version of the data
  if (timestamp) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  } else {
    // Otherwise, set a short cache time to improve performance
    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');
  }

  res.status(200).json(product);
};