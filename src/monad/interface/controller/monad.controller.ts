import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MonadService } from '../../application/service/monad.service';

@Controller('monad')
export class MonadController {
  constructor(private readonly monadService: MonadService) {}

  @Post('/user')
  createUser(@Body('address') address: string) {
    return this.monadService.createUser(address);
  }

  @Post('/user/attack')
  attackEnemy(@Body('address') address: string) {
    return this.monadService.attackEnemy(address);
  }

  @Get('/user/:address')
  getUser(@Param('address') address: string) {
    return this.monadService.getUser(address);
  }
}
