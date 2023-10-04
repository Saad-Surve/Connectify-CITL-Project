import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URL) return console.log('MONGODB URL Not Found');
    if(isConnected) return console.log("Connection already estabilished!")

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Connected TO MONGODB");
    } catch (error) {
        console.log(error)      
    }
}