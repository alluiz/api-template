# api-template

Use this repository to create an Typescript API in Node.js with default folder structure and router.

## Folder Structure

This is the folder structure used by this template. The each folder usage will be described later.

```
./src
   /controllers
    - FooController.ts
   /routes
    /api
      - router.ts
      - fooRouter.ts
    - router.ts
   /services
    - FooService.ts
   - server.ts
./test
  - server.spec.ts
```

## Routes Folder

The routes folder must be used to route requests of a specific resource to your respectively controller.

For example, if the server receives a request like GET /api/music the router will handle the request and route it to the MusicController.getAll method.

### routes/router.ts File

This file handle /api main route and don't needed be changed.

### routes/api/router.ts File

This file route the request to the specific controller router. In our example, the GET /api/music calls the MusicRouter.ts file.

```

import express from 'express';

import MusicRouter from './MusicRouter';

const router =  express.Router();

router.use('/music', MusicRouter);

export default router;

```

### routes/api/{ControllerName}Router.ts

This file will bind all controller methods with the respective route. In our example, the path '/' calls controller getAll() method.

```

import express from 'express';

import MusicController from '../../controllers/MusicController';
const musicController = new MusicController();

const router =  express.Router();

router.get('/', musicController.getAll);
router.get('/:id', musicController.get);

export default router;


```


## Controllers Folder

The controllers folder must be used to create the controllers that will handle the requests and responses for a specific resource.

For example, if the resource music was called by the router the controller handle the response status, response format, errors handling, etc.

```

class MusicController {

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
              .json({ message: 'An error has ocurred.' });

      }
   }
}

```

## Services Folder

This folder purpouse is to write the business logic code. In our example, the music service will return a list of our music.

```

class MusicService {

    async getAll() {

        const musics = [

            { id: '1', name: 'Rock And Roll All Nite', author: 'Kiss' },
            { id: '2', name: 'We Will Rock You', author: 'Queen' },
            { id: '3', name: 'Eye Of The Tiger', author: 'Survivor' }
        
        ];

        return musics;
    }

    async get(id: String) {

        const musics = [

            { id: '1', name: 'Rock And Roll All Nite', author: 'Kiss' },
            { id: '2', name: 'We Will Rock You', author: 'Queen' },
            { id: '3', name: 'Eye Of The Tiger', author: 'Survivor' }
        
        ];

        return musics.find(x => x.id == id);
    }

}


```

