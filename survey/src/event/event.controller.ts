import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { Repository } from 'typeorm';
import { EventBody } from './event.dto';

@Controller('event')
export class EventController {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  @Post('/')
  async handleEvent(@Body() body: EventBody) {
    switch (body.type) {
      case 'USER_CREATED':
        return this.userRepo.save(
          this.userRepo.create({
            id: body.payload.id,
            email: body.payload.email,
          }),
        );
    }
  }
}
