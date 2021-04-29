import { Request, Response } from 'express';

import FooService from '../services/FooService';

const fooService = new FooService();

class FooController {

    async getAll(request: Request, response: Response) {

        try {

            const result = await fooService.getAll();

            if (result)
                return response.json(result);
            else
                return response
                    .status(204);

        } catch (error) {

            return response
                .status(500)
                .json({ message: `Erro durante a execução: ${error.message}` });

        }

    }

    async get(request: Request, response: Response) {

        try {

            const id: string = request.params.id;

            const result = await fooService.get(id);

            if (result)
                return response.json(result);
            else
                return response
                    .status(404);

        } catch (error) {

            return response
                .status(500)
                .json({ message: `Erro durante a execução: ${error.message}` });

        }
    }

}

export default FooController;