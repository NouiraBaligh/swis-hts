import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import products from '../../../utils/data/products';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req

  const product = products.find(x => x.id === pid);
    res.setHeader('Cache-Control', 'public, max-age=0'); 
  res.status(200).json(product);
}
