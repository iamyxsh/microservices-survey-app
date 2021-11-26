import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SurveyQuestions } from './SurveyQuestion.entity';

@ObjectType()
@Entity()
export class SurveyAnswers {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [Boolean], { nullable: true })
  @Column({ type: 'simple-array' })
  answers?: boolean[];

  @Field(() => SurveyQuestions, { nullable: true })
  @ManyToOne(() => SurveyQuestions)
  @JoinColumn()
  questions?: SurveyQuestions;
}
