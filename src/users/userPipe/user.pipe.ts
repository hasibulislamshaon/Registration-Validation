import { plainToInstance } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
   
    const dataValidation=plainToInstance(CreateUserDto,value);
    const errors=await validate(dataValidation);
    if(errors.length>0){
      throw new BadRequestException("Validation failed\n"+JSON.stringify(errors))
    }

    return value;
  }
}
