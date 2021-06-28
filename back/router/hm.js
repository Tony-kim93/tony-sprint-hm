import express from 'express';
import 'express-async-errors';

const router = express.Router();

const hmDev = [
  {
    id: '1',
    name: 'van',
    createAt: Date.now().toString(),
    position: 'CTO',
    gender: 'male'
  },
  {
    id: '2',
    name: 'chloe',
    createAt: Date.now().toString(),
    position: 'senior',
    gender: 'female'
  },
  {
    id: '3',
    name: 'tony',
    createAt: Date.now().toString(),
    position: 'junior',
    gender: 'male'
  }
];

//get
router.get('/', (req, res, next) => {
  res.send('hi tony');
});

export default router;
