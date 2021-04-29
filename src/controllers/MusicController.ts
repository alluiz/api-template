import { Request, Response } from 'express';

import MusicService from '../services/MusicService';

const musicService = new MusicService();

class FooController {

    async getAll(request: Request, response: Response) {

        try {

            const result = await musicService.getAll();

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

            const result = await musicService.get(id);

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