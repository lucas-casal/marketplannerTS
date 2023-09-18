import { Request, Response } from "express-serve-static-core";
import { productsServices } from "../services/products.services";
import httpStatus from "http-status";
import { Product } from "../protocols/products.protocols";

const create = async (req:Request, res: Response) => {
    const product = await productsServices.create(req.body)

    res.send(product).status(httpStatus.CREATED)
}

const getAll = async (_req: Request, res: Response) => {
    const products = await productsServices.getAll()

    res.send(products).status(httpStatus.OK)
}

const getOne = async (req: Request, res: Response) => {
    const {id} = req.params
    
    const product: Product = await productsServices.getOne(Number(id))

    res.send(product).status(httpStatus.OK)
}

const update = async (req: Request, res: Response) => {
    const {id} = req.params
    const product: Product = await productsServices.update(id, req.body)

    res.send(product).status(httpStatus.OK)
}
const remove = async (req: Request, res: Response) => {
    const {id} = req.params

    await productsServices.remove(Number(id))

    res.sendStatus(httpStatus.OK)
}
export const productsController = {create, getAll, getOne, update, remove}
