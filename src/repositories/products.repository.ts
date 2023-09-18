import { db } from "../database/database.config";
import { Product } from "../protocols/products.protocols";

const create = async (infos: Array<string | number>) => {
    return (await db.query(`INSERT INTO products (name, image, price, quantity, unit) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`, infos)).rows[0]
}

const getAll = async () => {
    return (await db.query<Product>(`SELECT * FROM products;`)).rows
}

const getOne = async (id: number) => {
    return (await db.query<Product>(`SELECT * FROM products WHERE id=$1;`, [id])).rows
}


const update = async (infos: Array<string | number>) => {
    console.log(infos)
    return (await db.query(`UPDATE products SET
    name = $1, 
    image = $2, 
    price = $3, 
    quantity = $4, 
    unit = $5 
    WHERE id=$6
    RETURNING *;`, infos)).rows[0]
}

const remove = async (id: number) => {
    return (await db.query(`DELETE products WHERE id=$1;`, [id]))
}


export const productsRepository = {create, getAll, getOne, update, remove}