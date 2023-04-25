import express from "express";
import cors from "cors";
import session  from "express-session";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use (session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true, // agar frontend dapat mengirimkan request dan cookie dengan menyertakan credetialnya
    origin:'http://localhost:3000' // tempat mengakses domain dari luar
}));

app.use(express.json()); // untuk menerima data dalam format json

app.listen(process.env.APP_PORT, () =>{
    console.log('server was running...');
});