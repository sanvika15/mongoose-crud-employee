const mongoose = require('mongoose');
const dotenv = require('dotenv');

// ✅ Load environment variables before anything else
dotenv.config();

const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ Connection error:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
