import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../models/User.entity';

@ObjectType()
@Entity({ name: 'SurveyQuestions' })
export class SurveyQuestions {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [String])
  @Column('simple-array', { nullable: true })
  questions: [string];

  @Field(() => User)
  @ManyToOne(() => User, { nullable: true, lazy: true })
  @JoinColumn()
  creator?: User;
}
