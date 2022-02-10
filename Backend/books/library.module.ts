import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController, MembersController } from './library.controller';
import { BooksService, MembersService } from './library.service';
import { Books, Members, Borrows } from 'src/entities/library.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Books, Members, Borrows])],
  exports: [TypeOrmModule],
  controllers: [BooksController, MembersController],
  providers: [BooksService, MembersService]
})
export class LibraryModule {}  
