import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration the .env file

dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


// Defining first Route of the APP

app.get('/', (req: Request, res: Response) => {
    //Send Hello World
    res.send('Welcome to API Restful: APP Express + Nodemon + Jest + TS + Swagger + Mongoose')
});

// New Route
app.get('/hello', (req: Request, res: Response) => {
    //Send Hello World
    res.send('Hello World')
});

//Execute APP and Listen Requests to PORT

app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`)
})