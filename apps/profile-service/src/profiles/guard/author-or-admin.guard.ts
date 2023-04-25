import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ProfilesService } from "../profiles.service";

@Injectable()
export class AuthorOrAdminGuard implements CanActivate {
    constructor(private jwtService: JwtService,
        private profilesService: ProfilesService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const req = context.switchToHttp().getRequest();

            const authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' });
            }

            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' });
            }

            const profileId = req.params.id;
            const profile = await this.profilesService.getProfileById(profileId);
            const user = this.jwtService.verify(token, {secret: process.env.ACCESS_PRIVATE_KEY});
            req.user = user;
            const isAuthor = profile.id == user.id;
            const isAdmin = user.roles.some(role => 'ADMIN' == role.value);

            return isAuthor || isAdmin;
        } catch (e) {
            console.log(e);
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
        }
    }

}