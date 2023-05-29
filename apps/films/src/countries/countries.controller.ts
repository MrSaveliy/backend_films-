import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CountryService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Country } from './countries.model';
import { AuthorOrAdminGuard } from 'apps/profile-service/src/profiles/guard/author-or-admin.guard';


@ApiTags('countries')
@Controller('country')
export class CountryController {
    constructor(private countryService: CountryService) {}

    @ApiOperation({summary: "Создание страны"})
    @ApiResponse({status: 200, type: Country})
    @UseGuards(AuthorOrAdminGuard)
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
