import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LibraryModule } from './books/library.module';

@Module({
    imports: [LibraryModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'library',
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
          }),
    ],
    controllers : [AppController],
    providers: [AppService]
})
export class AppModule{}
