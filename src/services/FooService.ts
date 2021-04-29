class FooService {

    async getAll() {

        const foo_list = [

            { id: '1', name: 'foo1' },
            { id: '2', name: 'foo2' },
            { id: '3', name: 'foo3' }
        
        ];

        return foo_list;
    }

    async get(id: String) {

        const foo_list = [

            { id: '1', name: 'foo1' },
            { id: '2', name: 'foo2' },
            { id: '3', name: 'foo3' }
        
        ];

        return foo_list.find(x => x.id == id);
    }

}

export default FooService;