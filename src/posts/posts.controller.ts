import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostModel[]> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    return await this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() post: PostModel): Promise<PostModel> {
    return await this.postsService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: PostModel): Promise<PostModel> {
    return await this.postsService.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PostModel> {
    return await this.postsService.delete(id);
  }
}
