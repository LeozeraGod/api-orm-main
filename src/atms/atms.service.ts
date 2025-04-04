import { Injectable } from '@nestjs/common';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AtmsService {
 constructor(
  @InjectRepository(Atm)
  private atmsRepository: Repository<Atm>,
 ){}
  }

  findAll() {
    return `This action returns all atms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atm`;
  }

  update(id: number, updateAtmDto: UpdateAtmDto) {
    return `This action updates a #${id} atm`;
  }

  remove(id: number) {
    return `This action removes a #${id} atm`;
  }

