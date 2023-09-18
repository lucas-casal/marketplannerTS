import { Router } from "express";
import productsRouter from "./products.router";

const router = Router()

router.use(productsRouter)

export default router;