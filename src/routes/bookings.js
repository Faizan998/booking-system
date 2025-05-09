import express from 'express';
import { check } from 'express-validator';
import { bookActivity, getMyBookings, deleteBooking } from '../controllers/bookings.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes below are protected
router.use(protect);

// Book an activity
router.post(
  '/',
  [
    check('activityId', 'Activity ID is required').not().isEmpty()
  ],
  bookActivity
);

// Get logged in user's bookings
router.get('/me', getMyBookings);

// Delete booking
router.delete('/:id', deleteBooking);

export default router; 