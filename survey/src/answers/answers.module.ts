import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyAnswers } from 'src/models/SurveyAnswers.entity';
import { SurveyQuestions } from 'src/models/SurveyQuestion.entity';
import { Repository } from 'typeorm';
import { AnswersResolver } from './answers.resolver';
import { AnswersService } from './answers.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyAnswers, SurveyQuestions])],
  providers: [AnswersResolver, AnswersService, Repository],
})
export class AnswersModule {}
