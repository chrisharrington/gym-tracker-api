import 'module-alias/register';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { v4} from 'uuid';

import Workouts from './routes/workouts';

class Server {
    private port: number;

    constructor(port: number) {
        this.port = port;

        console.log(v4());
    }

    run() {
        const app = express();
        app.use(cors());
        app.use(bodyParser.json()); 

        Workouts.initialize(app);

        app.listen(this.port, () => console.log(`Listening on port ${this.port}...`));        
    }
}

new Server(7777).run();