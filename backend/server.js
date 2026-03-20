import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet()); //helmet is a security middleware that helps protect app 
app.use(morgan("dev"));  //log the requests

app.get("/", (req, res)=> {
    console.log(res.getHeaders());
    res.send("Hello from the backend");
})

app.listen(PORT, ()=> {
    console.log("Sever running on port " + PORT);
});