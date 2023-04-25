import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Token } from './token.model';

@Injectable()
export class TokenService {

    constructor(@InjectModel(Token) private tokenRepository: typeof Token,
        private jwtService: JwtService) { }

    generateTokens(payload) {
        const accessToken = this.jwtService.sign(payload, {secret: process.env.ACCESS_PRIVATE_KEY, expiresIn: '30m'})
        const refreshToken = this.jwtService.sign(payload, {secret: process.env.REFRESH_PRIVATE_KEY, expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = this.jwtService.verify(token, {secret: process.env.ACCESS_PRIVATE_KEY} );
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = this.jwtService.verify(token, {secret: process.env.REFRESH_PRIVATE_KEY} );
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await this.tokenRepository.findOne({where: {userId} });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return this.tokenRepository.update(tokenData, {where: {userId}});
        }
        const token = await this.tokenRepository.create({userId, refreshToken});
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await this.tokenRepository.destroy({where: {refreshToken} });
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await this.tokenRepository.findOne({where: {refreshToken} });
        return tokenData;
    }
}
