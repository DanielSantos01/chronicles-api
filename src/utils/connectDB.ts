import mongoose from 'mongoose';

const connectToDb = async (): Promise<void> => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_PATH,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    console.log('📦 Successfully connected with database');
  } catch (err) {
    console.log('Unable to connect with database');
  }
};

connectToDb();
