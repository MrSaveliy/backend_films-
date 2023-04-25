import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MessagePattern } from "@nestjs/microservices";
import { UserDto } from "@app/common";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @MessagePattern("register")
    register(userDto: UserDto) {
        return this.authService.register(userDto);
    }

    @MessagePattern("login")
    login(userDto: UserDto) {
        return this.authService.login(userDto);
    }

    @MessagePattern("logout")
    logout(refreshToken) {
        this.authService.logout(refreshToken);
    }

    @MessagePattern("refresh")
    refresh(refreshToken) {
        return this.authService.refresh(refreshToken);
    }

    @MessagePattern("delete")
    delete(userId: number) {
        this.authService.delete(userId);
    }

    @MessagePattern("getAll")
    getAll(nothing: string) {
        return this.authService.getAll();
    }

    @MessagePattern("getById")
    getById(userId: number) {
        return this.authService.getById(userId);
    }

}