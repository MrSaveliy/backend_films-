import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './countries.model';


@Injectable()
export class CountryService {

    constructor (@InjectModel(Country) private countryRepository: typeof Country) {}
    
    async createCountry(dto: CreateCountryDto) {
        const Country = await this.countryRepository.create(dto);
        return Country;
    }

    async getAll() {
        const users = await this.countryRepository.findAll({include: {all: true}});
        return users;
    }
    
}