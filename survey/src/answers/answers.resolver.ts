import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionGuard } from 'src/auth/question.guard';
import { SurveyAnswers } from 'src/models/SurveyAnswers.entity';
import { PostAnswersDTO } from './answers.dto';
import { AnswersService } from './answers.service';

@Resolver(() => SurveyAnswers)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Mutation(() => SurveyAnswers)
  @UseGuards(new QuestionGuard())
  async postAnswers(
    @Args({ name: 'postAnswerBody', type: () => PostAnswersDTO })
    body: PostAnswersDTO,
  ) {
    return this.answersService.postAnswers(body);
  }

  @Query(() => SurveyAnswers)
  @UseGuards(new QuestionGuard())
  async getAnswer(@Args({ name: 'id', type: () => Number }) id: number) {
    return this.answersService.getAnswer(id);
  }
}
