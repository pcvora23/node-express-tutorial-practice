require('dotenv').config();


const connectDB = require('./db/connect');
const data = require('./products.json');
const Product = require('./models/product')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(data);
        console.log("success !!!")
        process.exit(0);
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}
start()