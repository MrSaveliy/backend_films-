import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Main } from "./main.model";
import { CreateMainDto } from "./dto/create-main-page.dto";


@Injectable()
export class MainService {

    constructor (@InjectModel(Main) private mainRepository: typeof Main) {}
    
    async createMain(dto: CreateMainDto) {
        const Main = await this.mainRepository.create(dto);
        return Main;
    }

    async getAll() {
        const Main = await this.mainRepository.findAll({include: {all: true}});
        return Main;
    }
}