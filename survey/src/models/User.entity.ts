import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'User' })
export class User {
  @Field()
  @PrimaryColumn()
  id: number;

  @Field()
  @Column()
  email?: string;
}
