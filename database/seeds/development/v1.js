
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('post').del().then(function () {
        return knex('user').del().then(function () {
            return knex('role').del().then(function () {
                return knex('channel').del().then(function () {
                    return knex('externalChannel').del().then(function () {
                        return knex('entity').del().then(function () {
                            // Inserts seed entries
                            return knex('entity').insert([
                                {
                                    id: '00000000-0000-0000-0000-000000000000',
                                    name: 'ncast',
                                    shortName: 'ncast'
                                },
                                {
                                    id: '00000001-0000-0000-0000-000000000000',
                                    father: '00000000-0000-0000-0000-000000000000',
                                    name: 'Memes department',
                                    shortName: 'Memes'
                                }
                            ]).then(function () {
                                return knex('externalChannel').insert([
                                    {
                                        id: '00000000-0010-0000-0000-000000000000',
                                        entity: '00000000-0000-0000-0000-000000000000',
                                        name: 'pudim',
                                        link: 'www.pudim.com.br',
                                        imageURL: ''
                                    }
                                ]).then(function () {
                                    return knex('channel').insert([
                                        {
                                            id: '00000000-0001-0000-0000-000000000000',
                                            entity: '00000000-0000-0000-0000-000000000000',
                                            name: 'something'
                                        },
                                        {
                                            id: '00000000-0002-0000-0000-000000000000',
                                            entity: '00000000-0000-0000-0000-000000000000',
                                            name: 'something else'
                                        },
                                        {
                                            id: '00000000-0003-0000-0000-000000000000',
                                            entity:'00000000-0000-0000-0000-000000000000',
                                            name: 'news'
                                        },

                                        {
                                            id: '00000001-0001-0000-0000-000000000000',
                                            entity: '00000001-0000-0000-0000-000000000000',
                                            name: 'frenes'
                                        },
                                        {
                                            id: '00000001-0002-0000-0000-000000000000',
                                            entity: '00000001-0000-0000-0000-000000000000',
                                            name: 'april first'
                                        },
                                        {
                                            id: '00000001-0003-0000-0000-000000000000',
                                            entity: '00000001-0000-0000-0000-000000000000',
                                            name: 'easter egg'
                                        }
                                    ]).then(function () {
                                        return knex('role').insert([
                                            {
                                                id: -1,
                                                name: 'ademir'
                                            },
                                            {
                                                id: 0,
                                                name: 'manager'
                                            },
                                            {
                                                id: 1,
                                                name: 'editor'
                                            },
                                            {
                                                id: 2,
                                                name: 'author'
                                            }
                                        ]).then(function () {
                                            return knex('user').insert([
                                                {
                                                    id: '00000000-0000-0000-0001-000000000000',
                                                    entity: '00000000-0000-0000-0000-000000000000',
                                                    roleID: 2,
                                                    name: 'Chevis',
                                                    jobTitle: 'Color master',
                                                    username: 'dilsinho',
                                                    password: 'senha1234'
                                                },
                                                {
                                                    id: '00000001-0000-0000-0002-000000000000',
                                                    entity: '00000001-0000-0000-0000-000000000000',
                                                    roleID: 1,
                                                    name: 'Babo',
                                                    jobTitle: 'Meme Lord',
                                                    username: 'frenes',
                                                    password: 'senha1234'
                                                },
                                                {
                                                    id: '00000001-0000-0000-0003-000000000000',
                                                    entity: '00000000-0000-0000-0000-000000000000',
                                                    roleID: -1,
                                                    name: 'Julio',
                                                    jobTitle: 'Cara do back-end',
                                                    username: 'julio',
                                                    password: 'senha1234'
                                                }
                                            ]).then(function () {
                                                return knex('post').insert([
                                                    {
                                                        id: '00000000-0000-0000-0000-000000000001',
                                                        channel: '00000000-0001-0000-0000-000000000000',
                                                        state: 0,
                                                        type: 0,
                                                        title: 'teste',
                                                        description: 'this is a test',
                                                        postDate: '2000-01-01T00:00:00.000Z',
                                                        imageURL: '',
                                                        isImportant: false,
                                                        authorID: '00000001-0000-0000-0003-000000000000',
                                                        body: 'i\'ve said this is a test, move on people...',
                                                        link: '',
                                                        dueDate: '',
                                                        attachments: ''
                                                    },
                                                    {
                                                        id: '00000000-0000-0000-0000-000000000002',
                                                        channel: '00000000-0002-0000-0000-000000000000',
                                                        state: 0,
                                                        type: 1,
                                                        title: 'teste',
                                                        description: 'this is another test',
                                                        postDate: '2000-01-01T00:00:00.000Z',
                                                        imageURL: '',
                                                        isImportant: false,
                                                        authorID: '00000001-0000-0000-0003-000000000000',
                                                        body: 'i\'ve said this is another test, move on people...',
                                                        link: '',
                                                        dueDate: '2666-01-01T00:00:00.000Z',
                                                        attachments: ''
                                                    }
                                                ]);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};
