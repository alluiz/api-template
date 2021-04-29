class FooService {

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

export default FooService;