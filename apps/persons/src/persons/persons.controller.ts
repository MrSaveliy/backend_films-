import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { CreatePersonsDto } from "./dto/create-persons.dto";
import { MessagePattern } from "@nestjs/microservices";

@Controller('persons')
export class PersonsController {
    constructor(private personsService: PersonsService) {}

    @Post()
    create(@Body() dto: CreatePersonsDto) {
        return this.personsService.createPersons(dto); 
    }
    
    @Get()
    getAll() {
        return this.personsService.getAll();
    }

    @Get('/personName/:personName')
    async getPersonsByName(@Param('personName') personName: string) {
        const film = await this.personsService.getPersonsByName(personName)
        return film;
    }

    @Get('/:id')
    async getPersonById(@Param('id')  id: number) {
        const lang = '??' //Пока хз, как именно мы будем получать этот параметр
        return this.personsService.getPersonById(id, lang);
    }

    @MessagePattern("persons-request")
    getActors(request) {
        const filmsId = request.filmsId;
        const poster = request.poster;
        const lang = request.lang;
        return this.personsService.getPersons(filmsId, poster, lang);
    }

}