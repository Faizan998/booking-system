import User from '../models/User.js';
import Activity from '../models/Activity.js';
import Booking from '../models/Booking.js';
import { checkDbStatus,  } from '../utils/dbStatus.js';

c
export const getStats = async (req, res) => {
  try {

    const dbStatus = checkDbStatus();
    

    const userCount = await User.countDocuments();
    const activityCount = await Activity.countDocuments();
    const bookingCount = await Booking.countDocuments();

    const recentUsers = await User.find()
      .select('name email createdAt')
      .sort('-createdAt')
      .limit(5);
    
  
    const recentActivities = await Activity.find()
      .select('title location date time')
      .sort('-createdAt')
      .limit(5);
    
    
    const recentBookings = await Booking.find()
      .populate({
        path: 'user',
        select: 'name email'
      })
      .populate({
        path: 'activity',
        select: 'title date time'
      })
      .sort('-bookedAt')
      .limit(5);
    
    
    console.log('=== Database Statistics ===');
    console.log(`MongoDB Status: ${dbStatus.status}`);
    console.log(`Users: ${userCount}`);
    console.log(`Activities: ${activityCount}`);
    console.log(`Bookings: ${bookingCount}`);
    
    res.status(200).json({
      success: true,
      data: {
        dbStatus,
        counts: {
          users: userCount,
          activities: activityCount,
          bookings: bookingCount
        },
        recent: {
          users: recentUsers,
          activities: recentActivities,
          bookings: recentBookings
        }
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
}; 