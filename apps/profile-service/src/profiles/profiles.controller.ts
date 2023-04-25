import { Body, Controller, Delete, Get, Param, Post, Put, Response, Request, UseGuards } from '@nestjs/common';
import { Roles, RolesGuard, UserDto } from "@app/common";
import { ProfilesService } from "./profiles.service";
import { ProfileDto } from './dto/profile.dto';
import { AuthorOrAdminGuard } from './guard/author-or-admin.guard';

@Controller('users')
export class ProfilesController {

    constructor(private profilesService: ProfilesService) { }

    @Post('/login')
    async login(@Body() userDto: UserDto, @Response({ passthrough: true }) res) {
        const userData = await this.profilesService.login(userDto);

        res.cookie('refreshToken', userData.tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return userData;
    }

    @Post('/registration')
    async registration(@Body() userDto: UserDto, @Response({ passthrough: true }) res) {
        const userData = await this.profilesService.register(userDto);

        res.cookie('refreshToken', userData.tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return userData;
    }

    @Post('/logout')
    async logout(@Request() req) {
        const {refreshToken} = req.cookies;

        await this.profilesService.logout(refreshToken);
    }

    @Get('/refresh')
    async refresh(@Request() req, @Response({ passthrough: true }) res) {
        const {refreshToken} = req.cookies;

        const userData = await this.profilesService.refresh(refreshToken);

        res.cookie('refreshToken', userData.tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return userData;
    }

    //@Roles("ADMIN")
    //@UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.profilesService.getAll();
    }

    @UseGuards(AuthorOrAdminGuard)
    @Get('/:id')
    getUserDataById(@Param('id') id: number) {
        return this.profilesService.getUserDataById(id);
    }

    @UseGuards(AuthorOrAdminGuard)
    @Put('/:id')
    update(@Param('id') id: number,
        @Body() profileDto: ProfileDto) {
        return this.profilesService.update(id, profileDto);
    }

    @UseGuards(AuthorOrAdminGuard)
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.profilesService.delete(id);
    }

}