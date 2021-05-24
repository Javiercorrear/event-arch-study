"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(db => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    console.log('Server running on port 3001');
    app.listen(3001);
});
