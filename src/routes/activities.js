import express from 'express';
import { check } from 'express-validator';
import { getActivities, getActivity, createActivity } from '../controllers/activities.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();


router.get('/', getActivities);


router.get('/:id', getActivity);


router.post(
  '/',
  [
    protect,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
      check('date', 'Date is required').not().isEmpty(),
      check('time', 'Time is required').not().isEmpty()
    ]
  ],
  createActivity
);

export default router; 