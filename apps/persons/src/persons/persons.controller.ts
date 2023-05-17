import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { CreatePersonsDto } from "./dto/create-persons.dto";

@Controller('Persons')
export class PersonsController {
    constructor(private personsService: PersonsService) {}

    @Post()
    create(@Body() dto: CreatePersonsDto) {
        return this.personsService.createPersonss(dto); 
    }
    
    @Get()
    getAll() {
        return this.personsService.getAll();
    }

    @Get('/Persons_name/:Persons_name')
    async getPersonsByName(@Param('Persons_name') Persons_name: string) {
        const film = await this.personsService.getPersonsByName(Persons_name)
        return film;
    }

    @Get('/id/:id')
    async getPersonsById(@Param('id')  id: number) {
        const film = await this.personsService.getPersonsById(id);
        return film;
    }

}