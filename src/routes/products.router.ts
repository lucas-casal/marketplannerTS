import { Router } from 'express';
import { productsController } from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.create)
productsRouter.get('/products', productsController.getAll)
productsRouter.get('/products/:id', productsController.getOne)
productsRouter.put('/products/:id', productsController.update)
productsRouter.delete('/products/:id', productsController.remove)



export default productsRouter;
