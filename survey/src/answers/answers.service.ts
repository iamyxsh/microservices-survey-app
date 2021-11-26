import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyAnswers } from 'src/models/SurveyAnswers.entity';
import { SurveyQuestions } from 'src/models/SurveyQuestion.entity';
import { Repository } from 'typeorm';
import { PostAnswersDTO } from './answers.dto';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(SurveyAnswers)
    private readonly answersRepo: Repository<SurveyAnswers>,
    @InjectRepository(SurveyQuestions)
    private readonly questionsRepo: Repository<SurveyQuestions>,
  ) {}

  async postAnswers(body: PostAnswersDTO) {
    const question = await this.questionsRepo.findOne({ id: body.questionId });

    return this.answersRepo.save(
      this.answersRepo.create({
        answers: body.answers,
        questions: question,
      }),
    );
  }

  async getAnswer(id: number) {
    const answer = (await this.answersRepo.findOne({ id })) as any;
    answer.answers = answer.answers.map((ans: string) =>
      ans === 'true' ? true : false,
    ) as [boolean];
    return answer;
  }
}
