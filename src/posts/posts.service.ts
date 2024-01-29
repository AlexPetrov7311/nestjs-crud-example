import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return await this.postModel.findById(id).exec();
  }

  async create(post: Post): Promise<Post> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async update(id: string, post: Post): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }

  async delete(id: string): Promise<Post> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
