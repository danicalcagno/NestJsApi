import { Injectable, Inject } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    const usersOne = this.tasks.filter((t) => t.userId === 1);
    console.log(usersOne);

    return `NestJS Modular. ${this.apiKey}`;
  }
}
