import express from 'express';
import { check } from 'express-validator';
import { register, login, getMe } from '../controllers/auth.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Phone number is required').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  register
);

// Login route
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  login
);

// Get current user
router.get('/me', protect, getMe);

export default router; 