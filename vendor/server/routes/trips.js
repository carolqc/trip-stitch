import express from 'express';
import dbHandler from '../db-handler';

const router = express.Router();

router.post('/:id', (req, res) => {
  console.info(`req: ${JSON.stringify(req.body)}`);
  return res.json({ id: req.params.id, timestamp: Date.now() });
});

export default router;
