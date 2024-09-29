import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// const clientOptions = {
//     serverApi: { version: '1', strict: true, deprecationErrors: true },
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

async function connect() {
    if (mongoose.connection.readyState === 1) {
        return;
    }
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message, error);

    }
}

export default connect;