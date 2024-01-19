import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)private readonly userRepository:Repository<User>){

  }
  create(createUserDto: CreateUserDto):Promise<User> {
    let user:User=new User;
    user.firstName=createUserDto.firstName;
    user.lastName=createUserDto.lastName;
    user.phone=createUserDto.phone;
    user.address=createUserDto.address;
    user.country=createUserDto.country;
    user.email=createUserDto.email;
    user.password=createUserDto.password;
    user.confirmPassword=createUserDto.confirmPassword;
    return this.userRepository.save(user);
  }

  findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({where: {id:id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user:User=new User;
    user.firstName=updateUserDto.firstName;
    user.lastName=updateUserDto.lastName;
    user.phone=updateUserDto.phone;
    user.address=updateUserDto.address;
    user.country=updateUserDto.country;
    user.email=updateUserDto.email;
    user.id=id;
    user.password=updateUserDto.password;
    user.confirmPassword=updateUserDto.confirmPassword;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
