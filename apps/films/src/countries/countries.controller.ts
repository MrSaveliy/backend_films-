import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';


@Controller('country')
export class CountryController {
    constructor(private countryService: CountryService) {}

    @Post()
    create(@Body() dto: CreateCountryDto) {
        return this.countryService.createCountry(dto); 
    }
    
    @Get()
    getAll() {
        return this.countryService.getAll();
    }

}
