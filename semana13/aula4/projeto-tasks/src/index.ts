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

app.get('/getAllUserTasks', (req: Request, res: Response) => {
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
    const query = connection.raw(`UPDATE userTasks SET nickname = "${nickname}" WHERE id = ${id}`);

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


// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
