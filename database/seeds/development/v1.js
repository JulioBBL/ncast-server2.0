
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('post').del().then(function () {
        return knex('permission').del().then(function () {
            return knex('user').del().then(function () {
                return knex('role').del().then(function () {
                    return knex('channel').del().then(function () {
                        return knex('externalChannel').del().then(function () {
                            return knex('entity').del().then(function () {
                                // Inserts seed entries
                                return knex('entity').insert([
                                    {
                                        id: '00000000-0000-0000-0000-000000000000',
                                        name: 'CCBS',
                                        shortName: 'CCBS'
                                    },
                                    {
                                        id: '00000001-0000-0000-0000-000000000000',
                                        father: '00000000-0000-0000-0000-000000000000',
                                        name: 'Gastronomia',
                                        shortName: 'GSTR'
                                    }
                                ]).then(function () {
                                    return knex('externalChannel').insert([
                                        {
                                            id: '00000001-0001-0000-0000-000000000000',
                                            entity: '00000001-0000-0000-0000-000000000000',
                                            name: 'Grupo do Facebook',
                                            link: 'www.pudim.com.br',
                                            imageURL: 'mc5_images_GrupoFace.png'
                                        },
                                        {
                                            id: '00000001-0002-0000-0000-000000000000',
                                            entity: '00000001-0000-0000-0000-000000000000',
                                            name: 'TIA',
                                            link: 'https://www3.mackenzie.br/tia/index.php',
                                            imageURL: 'mc5_images_TIA.png'
                                        },
                                        {
                                            id: '00000001-0003-0000-0000-000000000000',
                                            entity: '00000001-0000-0000-0000-000000000000',
                                            name: 'Moodle',
                                            link: 'https://moodle.mackenzie.br/moodle/',
                                            imageURL: 'mc5_images_Moodle.png'
                                        }
                                    ]).then(function () {
                                        return knex('channel').insert([
                                            {
                                                id: '00000000-0000-0001-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'TCC e Pesquisa',
                                                hexColor: 'f2c500',
                                                imageURL: 'mc5_images_pesquisa.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0002-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Monitoria',
                                                imageURL: 'mc5_images_noticias1.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0003-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Notícias',
                                                imageURL: 'mc5_images_noticias2.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0004-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Internacionalização',
                                                imageURL: 'mc5_images_graduacao.jpeg'
                                            },
                                            {
                                                id: '00000000-0000-0005-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Eventos Gastronomia',
                                                imageURL: 'mc5_images_graduacao.jpeg'
                                            },
                                            {
                                                id: '00000000-0000-0006-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Eventos Nutrição',
                                                imageURL: 'mc5_images_eventos1.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0007-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Eventos Farmácia',
                                                imageURL: 'mc5_images_eventos2.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0008-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Eventos Fisioterapia',
                                                imageURL: 'mc5_images_eventos1.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0009-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Eventos Psicologia',
                                                imageURL: 'mc5_images_eventos2.jpg'
                                            },
                                            {
                                                id: '00000000-0000-0010-0000-000000000000',
                                                entity: '00000000-0000-0000-0000-000000000000',
                                                name: 'Eventos Biológicas',
                                                imageURL: 'mc5_images_eventos1.jpg'
                                            },

                                            {
                                                id: '00000001-0000-0001-0000-000000000000',
                                                entity: '00000001-0000-0000-0000-000000000000',
                                                name: 'Estágios',
                                                imageURL: 'mc5_images_eventos2.jpg'
                                            },
                                            {
                                                id: '00000001-0000-0002-0000-000000000000',
                                                entity: '00000001-0000-0000-0000-000000000000',
                                                name: 'Notícias',
                                                imageURL: 'mc5_images_noticias1.jpg'
                                            },
                                            {
                                                id: '00000001-0000-0003-0000-000000000000',
                                                entity: '00000001-0000-0000-0000-000000000000',
                                                name: 'Atv. Complementares',
                                                hexColor: 'e67e22',
                                                imageURL: 'mc5_images_graduacao.jpeg'
                                            },
                                            {
                                                id: '00000001-0000-0004-0000-000000000000',
                                                entity: '00000001-0000-0000-0000-000000000000',
                                                name: 'Eventos',
                                                hexColor: '3498db',
                                                imageURL: 'mc5_images_graduacao.jpeg'
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
                                                    return knex('permission').insert([
                                                        {
                                                            channel: '00000000-0000-0001-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0002-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0003-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0004-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0005-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0006-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0007-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0008-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0009-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },


                                                        {
                                                            channel: '00000000-0000-0005-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0006-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0007-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0008-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },
                                                        {
                                                            channel: '00000000-0000-0009-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        },

                                                        {
                                                            channel: '00000000-0000-0010-0000-000000000000',
                                                            author: '00000001-0000-0000-0003-000000000000'
                                                        }
                                                    ]).then(function () {
                                                        return knex('post').insert([
                                                            {
                                                                id: '00000000-0000-0000-0000-000000000001',
                                                                channel: '00000001-0000-0004-0000-000000000000',
                                                                state: 0,
                                                                type: 0,
                                                                title: 'Semana da Saúde',
                                                                description: 'Estamos com matrículas abertas para o nosso curso de Lato Sensu',
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
                                                                id: '00000001-0000-0003-0000-000000000001',
                                                                channel: '00000001-0000-0003-0000-000000000000',
                                                                state: 0,
                                                                type: 1,
                                                                title: 'Degustação de requeijão',
                                                                description: 'O sistema de lnçamento de Atividade complementares no TIA',
                                                                postDate: '2000-01-01T00:00:00.000Z',
                                                                imageURL: '',
                                                                isImportant: false,
                                                                authorID: '00000001-0000-0000-0003-000000000000',
                                                                body: 'i\'ve said this is another test, move on people...',
                                                                link: '',
                                                                dueDate: '',
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
        });
    });
};
