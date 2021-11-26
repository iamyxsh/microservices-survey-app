import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class PostAnswersDTO {
  @Field(() => [Boolean])
  @IsNotEmpty()
  answers: [boolean];

  @Field()
  @IsNotEmpty()
  questionId: number;
}
