// const mongoose = require('mongoose');

// const connectDB = async() => {
//   try{
//     await mongoose.connect('mongodb://127.0.0.1:27017/bookMyShow');
//     console.log('Connected to Database')}
//   catch(error){
//     console.log(error)}
// }
// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/bookmyshow', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
