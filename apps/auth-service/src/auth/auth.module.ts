import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './auth.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { RolesModule } from '../roles/roles.module';
import { AuthController } from './auth.controller';
import { SharedModule } from '@app/common';
import { Token } from '../token/token.model';
import { TokenModule } from '../token/token.module';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles, Token]),
        RolesModule,
        SharedModule,
        TokenModule,
    ],
    exports: [
        AuthService,
    ]
})
export class AuthModule { };