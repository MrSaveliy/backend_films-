import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Persons } from './persons.model';
import { CreatePersonsDto } from './dto/create-persons.dto';



@Injectable()
export class PersonsService {

    constructor (@InjectModel(Persons) private personsRepository: typeof Persons) {}
    
    async createPersonss(dto: CreatePersonsDto) {
        const Personss = await this.personsRepository.create(dto);
        return Personss;
    }

    async getAll() {
        const Personss = await this.personsRepository.findAll({include: {all: true}});
        return Personss;
    }

    async getPersonsByName(persons_name: string) {
        const Persons = await this.personsRepository.findOne({
            where: { persons_name }, 
            include: {all: true}
        });
        return Persons;
    }
   
    async getPersonsById(id: number) {
        const Persons = await this.personsRepository.findByPk(id);
        if (!Persons) {
          throw new Error('Personss not found');
        }
        return Persons;
      }
}