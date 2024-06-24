import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUserById(id: number) {
        return {
            id: 1,
            username: 'martinsmusa',
            displayName: 'Martins'
        };
    }
}