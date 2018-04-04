import express from 'express';

const router = express.Router();

// returns static data
const pure = (resp) => (req,res,next) => res.json(resp);

router.get('/', pure({ hoge: 'piyo' }));

export default router;
