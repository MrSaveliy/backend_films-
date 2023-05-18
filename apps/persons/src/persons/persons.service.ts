import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Persons } from './persons.model';
import { CreatePersonsDto } from './dto/create-persons.dto';
import { PersonLang } from './persons-lang.model';
import { FilmsActors } from './films-actors.model';
import { Directors } from './directors.model';
import { DirectorsFilms } from './directors-films.model';



@Injectable()
export class PersonsService {

    constructor (@InjectModel(Persons) private personsRepository: typeof Persons,
                 @InjectModel(PersonLang) private personlangRepository: typeof PersonLang,
                 @InjectModel(Directors) private directorsRepository: typeof Directors,
                 @InjectModel(FilmsActors) private filmsactorsRepository: typeof FilmsActors,
                 @InjectModel(DirectorsFilms) private directorsfilmsRepository: typeof DirectorsFilms) {}
    
    async createPersonss(dto: CreatePersonsDto) {
        const Personss = await this.personsRepository.create(dto);
        return Personss;
    }

    async getAll() {
        const Personss = await this.personsRepository.findAll({include: {all: true}});
        return Personss;
    }

    async getPersonsByName(personName: string) {
        const Persons = await this.personlangRepository.findOne({
            where: { personName }, 
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