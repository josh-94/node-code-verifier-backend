"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Defining first Route of the APP
app.get('/', (req, res) => {
    //Send Hello World
    res.send('Welcome to API Restful: APP Express + Nodemon + Jest + TS + Swagger + Mongoose');
});
// New Route
app.get('/hello', (req, res) => {
    //Send Hello World
    res.send('Hello World');
});
// New Route for exercise sending a JSON as response
app.get('/exercise', (req, res) => {
    //Send Good Bye World
    res.json({
        "data": {
            "message": "Goodbye, world"
        }
    });
});
//Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map