import { Exercise } from '@lib/models';

import { Base } from './base';

class ExerciseService extends Base<Exercise> {
    constructor() {
        super('exercises');
    }

    async getForWeek(week: Date) : Promise<Exercise[]> {
        return await this.find({ week }, { order: 1 });
    }
}

export default new ExerciseService();