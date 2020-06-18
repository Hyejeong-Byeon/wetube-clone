import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on:http://localhost:${PORT}`);

const handleHome = (req, res) =>
    res.send("Hello from home");

const handleProfile = (req, res) =>
    res.send("You are my profile");

app.use(cookieParser());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("tiny"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);