import { Controller, Delete, Get, Patch, Post, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users
  // GET /users/:id
  // POST /users
  // PATCH /users/:id
  // DELETE /users/:id

  @Get()
  findAll(): any[] {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string): any[] {
    return [id];
  }

  @Post()
  createOne(@Body() user: object) {
    return user;
  }

  @Patch(':id') //will updating the user with id and will also include the body in req
  updateOne(@Param('id') id: number, @Body() user: object): object {
    return { id, ...user };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): any[] {
    return [id];
  }
}
