import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.get("/api", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("<h1>Typescript + Express 🦄</h1>");
})

export default router;