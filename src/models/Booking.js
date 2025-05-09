import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookedAt: {
    type: Date,
    default: Date.now
  }
});


BookingSchema.index({ activity: 1, user: 1 }, { unique: true });

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking; 