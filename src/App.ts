import express, {Express} from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(cors());
app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "./uploads")));

app.use(router);

app.listen(port, () => {
    console.log(`[SERVER] : Running at port ${port}`);
})