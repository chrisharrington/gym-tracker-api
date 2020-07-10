import { Application, Request, Response } from 'express';

import WorkoutService from '@lib/data/workouts';
import { Workout } from '@root/lib/models';

export default class Exercises {
    static initialize(app: Application) {
        app.get('/workouts', this.getWorkouts.bind(this));
        app.post('/workouts', this.saveWorkouts.bind(this));
    }

    private static async getWorkouts(_: Request, response: Response) {
        try {
            console.log('Request received: GET /workouts');
            
            const workouts = await WorkoutService.find({ userId: 1 }, { order: 1 });
            response.status(200).send(workouts);
        } catch (e) {
            console.log('Request failed: GET /workouts');
            console.error(e);
            response.status(500).send(e);
        }
    }

    private static async saveWorkouts(request: Request, response: Response) {
        try {
            console.log('Request received: POST /workouts');

            await WorkoutService.save(request.body as Workout[]);

            response.sendStatus(200);
        } catch (e) {
            console.log('Request failed: POST /workouts');
            console.error(e);
            response.status(500).send(e);
        }
    }
}