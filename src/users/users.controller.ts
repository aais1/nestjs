import { Controller, Delete, Get, Patch, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // GET /users
  // GET /users/:id
  // POST /users
  // PATCH /users/:id
  // DELETE /users/:id

  @Get('/test')
  test() {
    return 'test';
  }

  @Get('')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  createOne(@Body() user: User) {
    return this.userService.createOne(user);
  }

  @Patch(':id') //will update the user with id and req will also include the body that will contain user
  updateOne(@Param('id') id: string, @Body() user: User) {
    return this.userService.updateOne(id, user);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.userService.deleteOne(id);
  }
}
