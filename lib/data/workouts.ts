import { Workout } from '@lib/models';

import { Base } from './base';

class WorkoutService extends Base<Workout> {
    constructor() {
        super('workouts');
    }

    async get(id: number) : Promise<Workout[]> {
        return await this.find({ id });
    }

    async save(workouts: Workout[]) : Promise<void> {
        await Promise.all(workouts.map((workout: Workout) => (
            this.updateOne(workout)
        )));
    }
}

export default new WorkoutService();