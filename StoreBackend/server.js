import express  from 'express';
import mongoose  from 'mongoose';
import 'dotenv/config'
import userRoutes from './routes/user.js';
import productRoutes from "./routes/product.js";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()) // parse the request body
app.use("/users", userRoutes)
app.use("/product", productRoutes);

let db_url = process.env.MONGODB_URL;

mongoose.connect(db_url).then(()=>{
    console.log("mongodb successfully connected")
}).catch((error)=>{
    console.log("error in mongodb connection")
    console.error(error)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})