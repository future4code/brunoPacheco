import express, { Request, Response, response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'bruno',
        password: process.env.senha_banco,
        database: 'bruno'
    }
});

app.get('/', (req: Request, res: Response) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/ping': 'retorna o texto pong',
            '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
        }
    };

    // Exemplo de retorno de um JSON
    res.send(resposta)
});

app.get('/ping', (req: Request, res: Response) => {
    const hasQueryString = Object.values(req.query).length > 0;

    if (hasQueryString) {
        // Exemplo de retorno de um JSON
        res.send(req.query);
    } else {
        // Exemplo de retorno de texto "puro"
        res.send('pong (nenhuma query string foi passada)');
    }
});

app.get('/hello/:name', (req: Request, res: Response) => {
    const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;

    // Exemplo de retorno de HTML
    res.send(resposta)
});

app.post('/createUser', (req: Request, res: Response) => {

    const query = connection('userTasks').insert(req.body)
    query.then(result => {
        res.send(result);
    }).catch(e => {
        res.send(e)
    })
});

app.get('/getAllUser', (req: Request, res: Response) => {
    const query = connection.raw('SELECT * FROM userTasks');

    query.then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err)
    })
});

app.put('/editUser/:id', (req: Request, res: Response) => {

    const id = req.params.id
    const nickname = req.body.nickname
    const query = connection.raw(`UPDATE userTasks SET nickname = "${nickname}" WHERE id = "${id}"`);

    query.then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err)
    })
});

app.delete('/deleteUser/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const query = connection.raw(`DELETE FROM userTasks WHERE id=${id} `);

    query.then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err)
    })
});

app.get('/getUser/:tipo', (req: Request, res: Response) => {

    let tipo = req.params.tipo

    //TODO esse jeito não foi muito eficiente
    if (isNaN(Number(tipo))) {
        const query = connection.raw(`SELECT *  FROM userTasks WHERE nome LIKE "${tipo}" `);
        query.then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    } else {
        const query = connection.raw(`SELECT *  FROM userTasks WHERE id = ${tipo}`);
        query.then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    }
    // const query = connection.raw(`SELECT *  FROM userTasks WHERE nome LIKE "${tipo}" OR id="${tipo}" `);
    //     query.then(result => {
    //         res.send(result);
    //     }).catch(err => {
    //         res.send(err)
    //     })

});

// app.get('/getAllUserByOrderOrAge/:orderOrAge', (req: Request, res: Response) => {
//     const orderOrAge = req.params.orderOrAge

//     if (orderOrAge === "asc" || "desc") {
//         const query = connection.raw(`SELECT * FROM userTasks ORDER BY ${orderOrAge}`);
//         query.then(result => {
//             res.send(result);
//         }).catch(err => {
//             res.send(err)
//         })
//     } 

// });

app.post('/createTask', (req: Request, res: Response) => {

    const query = connection('tasks').insert(req.body)

    query.then(result => {
        res.send(result);
    }).catch(e => {
        res.send(e)
    })

});

app.put('/editTask/:id', (req: Request, res: Response) => {

    const id = req.params.id
    const descricao = req.body.descricao
    const end_date = req.body.end_date
    const query = connection.raw(`UPDATE tasks SET descricao = "${descricao}", end_date = "${end_date}" WHERE id = "${id}"`);

    query.then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err)
    })
});

app.get('/getAllTasks', (req: Request, res: Response) => {
    const query = connection.raw('SELECT * FROM tasks');

    query.then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err)
    })
});

app.put('/editResponsibleForTask/:id/:id_user_responsible', (req: Request, res: Response) => {
    const id=req.params.id
    const idUserRes = req.params.id_user_responsible
    const query = connection.raw(`UPDATE tasks SET id_user_responsible = "${idUserRes}" WHERE id = "${id}"`);

    query.then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err)
    })
});


// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
