import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../models/User.entity';
import { CreateQuestionsDTO } from './questions.dto';
import { SurveyQuestions } from '../models/SurveyQuestion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(SurveyQuestions)
    private readonly questionRepo: Repository<SurveyQuestions>,
  ) {}

  async getSurvey(id: number) {
    return this.questionRepo.findOne({ id });
  }

  async createSurveyQuestions(
    body: CreateQuestionsDTO,
    context: any,
  ): Promise<SurveyQuestions> {
    const user = await this.userRepo.findOne({ id: context.req.userid });

    return this.questionRepo.save(
      this.questionRepo.create({
        creator: user,
        questions: body.questions,
      }),
    );
  }
}
