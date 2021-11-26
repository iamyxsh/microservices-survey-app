import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateQuestionsDTO {
  @Field(() => [String])
  @IsNotEmpty()
  questions: [string];
}
