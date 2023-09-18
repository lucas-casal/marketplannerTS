import { Product } from "../protocols/products.protocols"
import { productsRepository } from "../repositories/products.repository"

const create = (body: Omit<Product, "id">) => {
    const {name, image, price, quantity, unit} = body
    const infos = [name, image, price, quantity, unit]
    const product = productsRepository.create(infos);
    return product;
}

const getAll = () => {
    const products = productsRepository.getAll();
    return products
}

const getOne = async (id: number) => {

    const product: Product = await productsRepository.getOne(id)[0]

    return product

}

const update = (id: string, body: Product) => {
    
    const {name, image, price, quantity, unit} = body
    const infos = [name, image, price, quantity, unit, Number(id)]
    console.log(infos)

    const product = productsRepository.update(infos);
    return product;
}

const remove = (id: number) => {
    productsRepository.remove(id)
}

export const productsServices = {create, getAll, getOne, update, remove};