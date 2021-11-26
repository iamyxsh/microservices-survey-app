import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsResolver } from './questions.resolver';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyQuestions } from '../models/SurveyQuestion.entity';
import { User } from 'src/models/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, SurveyQuestions])],
  providers: [QuestionsService, QuestionsResolver, Repository],
})
export class QuestionsModule {}
