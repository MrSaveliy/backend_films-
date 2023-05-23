import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Country } from './countries.model';


@ApiTags('countries')
@Controller('country')
export class CountryController {
    constructor(private countryService: CountryService) {}

    @ApiOperation({summary: "Создание страны"})
    @ApiResponse({status: 200, type: Country})
    @Post()
    create(@Body() dto: CreateCountryDto) {
        return this.countryService.createCountry(dto); 
    }
    
    @ApiOperation({summary: "Получение всех стран"})
    @ApiResponse({status: 200, type: [Country]})
    @Get()
    getAll() {
        return this.countryService.getAll();
    }

}
