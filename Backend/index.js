import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRouter.js';


// app configuration
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoint
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Api working')
});

app.listen(port, ()=> {
    console.log(`listening on http://localhost:${port}`);
});