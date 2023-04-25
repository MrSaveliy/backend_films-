import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { SharedModule } from '@app/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './token.model';

@Module({
  providers: [TokenService],
  imports: [
    SequelizeModule.forFeature([Token]),
    SharedModule,
],
  exports: [
    TokenService,
  ]
})
export class TokenModule { }
