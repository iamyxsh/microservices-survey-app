import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionGuard } from 'src/auth/question.guard';
import { CreateQuestionsDTO } from './questions.dto';
import { QuestionsService } from './questions.service';
import { SurveyQuestions } from '../models/SurveyQuestion.entity';

@Resolver(() => SurveyQuestions)
export class QuestionsResolver {
  constructor(private questionsService: QuestionsService) {}

  @Query(() => SurveyQuestions, { nullable: true })
  @UseGuards(new QuestionGuard())
  getSurvey(@Args({ name: 'id', type: () => Number }) id: number) {
    return this.questionsService.getSurvey(id);
  }

  @Mutation(() => SurveyQuestions)
  @UseGuards(new QuestionGuard())
  createSurvey(
    @Context() context: any,
    @Args({ name: 'createSurveyBody', type: () => CreateQuestionsDTO })
    body: CreateQuestionsDTO,
  ): Promise<SurveyQuestions> {
    return this.questionsService.createSurveyQuestions(body, context);
  }
}
