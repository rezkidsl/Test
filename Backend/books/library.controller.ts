import { Controller, Post, Body, Get, Param, HttpStatus, Res, Put, Patch, Delete} from '@nestjs/common';
import { BooksService, MembersService, BorrowsService } from './library.service';
import { Books, Members, Borrows } from 'src/entities/library.entity';


@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService){}

  @Post()
  async createBooks(@Res() response, @Body()books: Books) {
    const newBook = await this.booksService.createBooks(books);
    return response.status(HttpStatus.CREATED).json({
        newBook
    })
  } 

  // addBook(
  //   @Body('code') prodCode: string, 
  //   @Body('title') prodTitle: string, 
  //   @Body('author') prodAuthor: string, 
  //   @Body('stock') prodStock: number
  //   ){
  //   const generatedCode = this.bookService.insertBook(
  //     prodCode, 
  //     prodTitle, 
  //     prodAuthor, 
  //     prodStock
  //   ); 
  //   return {gCode : generatedCode};
  // }
  
  @Get()
  async fetchAll(@Res() response) {
    const books = await this.booksService.findAll();
    return response.status(HttpStatus.OK).json({
        books
    })
  }
  // getAllBooks() {
  //   return this.bookService.getBooks();
  // }

  @Get(':code')
  async findById(@Res() response, @Param('code') code) {
    const book = await this.booksService.findOne(code);
    return response.status(HttpStatus.OK).json({
        book
    })
  }

  @Put(':code/update')
    async update(@Param('code') code, @Body() books: Books): Promise<any> {
        books.code = code;
        console.log('Update #' + books.code)
        return this.booksService.update(books);
    } 
  
  @Delete(':code/delete')
  async delete(@Param('code') code): Promise<any> {
    return this.booksService.delete(code);
  } 
  // getBook(@Param('bookCode') code: string) {
  //   return this.bookService.getOneBook(code);
  // }

  // @Patch(':bookCode')
  // updateBook(
  //   @Param('bookCode') code: string,
  //   @Body('title') title: string,
  //   @Body('author') author: string,
  //   @Body('stock') stock: number,
  //   ) {
  //       this.bookService.updateBook(code, title, author, stock);
  //       return null;
  // }

  // @Delete(':bookCode')
  // removeBook(@Param('bookCode') code: string) {
  //   this.bookService.deleteBook(code);
  //   return null;
  // }
}

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService){}
  
  @Post()
  async createMembers(@Res() response, @Body()members: Members) {
    const newMember = await this.membersService.createMembers(members);
    return response.status(HttpStatus.CREATED).json({
        newMember
    })
  }
  // addMember(
  //   @Body('code') prodCode: string, 
  //   @Body('name') prodname: string,
  //   @Body('borrowSum') prodborrowSum: number, 
  //   @Body('penaltyStat') prodpenaltyStat: string
  //   ){
  //   const generatedCode = this.memberService.insertMember(
  //     prodCode, 
  //     prodname, 
  //     prodborrowSum,
  //     prodpenaltyStat
  //   ); 
  //   return {gCode : generatedCode};
  // }
  
  @Get()
  async fetchAll(@Res() response) {
    const members = await this.membersService.findAll();
    return response.status(HttpStatus.OK).json({
        members
    })
  }
  // getAllmembers() {
  //   return this.memberService.getMembers();
  // }

  @Get(':memberCode')
  async findById(@Res() response, @Param('memberCode') memberCode) {
    const member = await this.membersService.findOne(memberCode);
    return response.status(HttpStatus.OK).json({
        member
    })
  }

  @Put(':code/update')
    async update(@Param('code') code, @Body() members: Members): Promise<any> {
        members.code = code;
        console.log('Update #' + members.code)
        return this.membersService.update(members);
    } 
  
  @Delete(':code/delete')
  async delete(@Param('code') code): Promise<any> {
    return this.membersService.delete(code);
  }
//   getMember(@Param('memberCode') code: string) {
//     return this.memberService.getOneMember(code);
//   }

//   @Patch(':memberCode')
//   updateMember(
//     @Param('memberCode') code: string,
//     @Body('name') name: string,
//     @Body('borrowSum') borrowSum: number, 
//     @Body('penaltyStat') penaltyStat: string
//     ) {
//         this.memberService.updateMember(code, name, borrowSum, penaltyStat);
//         return null;
//   }

//   @Delete(':memberCode')
//   removeMember(@Param('memberCode') code: string) {
//     this.memberService.deleteMember(code);
//     return null;
//   }
}


@Controller('borrows')
export class BorrowsController {
  constructor(private readonly borrowService: BorrowsService,
    private readonly bookService: BooksService, 
    private readonly memberService: MembersService){}

  @Post()
  async createBorrows(@Res() response, @Body()borrows: Borrows) {
    const newBorrow = await this.borrowService.createBorrows(borrows);
    return response.status(HttpStatus.CREATED).json({
        newBorrow
    })
  }
  // addBorrow(
  //   @Body('codeBook') prodCodeBook: string, 
  //   @Body('borrowDate') prodborrowDate: Date, 
  //   @Body('nameMember') prodnameMember: string,
  //   ){
  //   const generatedCode = this.borrowService.insertBorrow(
  //     prodCodeBook, 
  //     prodborrowDate, 
  //     prodnameMember
  //   );
  //   return {gCode : generatedCode};
  // }
  
  
  @Get()
  async fetchAll(@Res() response) {
    const borrows = await this.borrowService.findAll();
    return response.status(HttpStatus.OK).json({
        borrows
    })
  }
  // getAllBorrows() {
  //   return this.borrowService.getBorrows();
  // }
  @Get(':codeBook')
  async findById(@Res() response, @Param('codeBook')codeBook) {
    const borrow = await this.borrowService.findOne(codeBook);
    return response.status(HttpStatus.OK).json({
        borrow
    })    
  }

  @Put(':code_Book/update')
    async update(@Param('code_Book') code_Book, @Body() borrows: Borrows): Promise<any> {
        borrows.code_Book = code_Book;
        console.log('Update #' + borrows.code_Book)
        return this.borrowService.update(borrows);
    } 
  
  @Delete(':code/delete')
  async delete(@Param('code') code): Promise<any> {
    return this.borrowService.delete(code);
  }
  // getBorrow(@Param('codeBook') codeBook: string) {
  //   return this.borrowService.getOneBorrow(codeBook);
  // }

  // @Patch(':codeBook')
  // updateBorrow(
  //   @Param('codeBook') codeBook: string,
  //   @Body('borrowDate') borrowDate: Date,
  //   @Body('nameMember') nameMember: string,

  //   ) {
  //       this.borrowService.updateBorrow(codeBook, borrowDate, nameMember);
  //       return null;
  // }

  // @Delete(':codeBook')
  // removeBorrow(@Param('codeBook') codeBook: string) {
  //   this.borrowService.deleteBorrow(codeBook);
  //   return null;
  // }
}