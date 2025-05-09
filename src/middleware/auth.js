import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {

      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route'
      });
    }

    try {

      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route'
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
}; 