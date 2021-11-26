import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { Repository } from 'typeorm';
import { EventController } from './event.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [EventController],
  providers: [Repository],
})
export class EventModule {}
