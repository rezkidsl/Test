import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Books, Members, Borrows } from 'src/entities/library.entity';
import { Book, Member, Borrow } from './library.model';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private booksRepository: Repository<Books>,
  ){}

  findAll(): Promise<Books[]> {
    return this.booksRepository.find();
  }

  findOne(code: string): Promise<Books> {
    return this.booksRepository.findOne(code);
  }

  createBooks(books: Books): Promise<Books>{
    return this.booksRepository.save(books);
  }

  async remove(code: string): Promise<void> {
    await this.booksRepository.delete(code);
  }
  
  async update(books: Books): Promise<void> {
    await this.booksRepository.update(books.code, books);
  }

  async delete(code: string): Promise<void> {
    await this.booksRepository.delete(code);
  }
  /* private books: Book[] = [];

  insertBook(code: string, title: string, author: string, stock: number) {
    const newBook = new Book(code, title, author, stock);
    this.books.push(newBook);
    return code;
  }

  getBooks(){
    return [...this.books];
  }

  getOneBook(code : string){
    const book = this.findBook(code)[0];
    return {...book};
  }

  updateBook(code: string, title: string, author: string, stock: number){
    const [book, index] = this.findBook(code);
    const updateBook = {...book};
    if (title) {
        updateBook.title = title;
    }
    if (author) {
        updateBook.author = author;
    }
    if (stock != 0) {
      updateBook.stock = stock;
    } else {
      updateBook.stock = 0;
    }
    this.books[index] = updateBook;
  }

  deleteBook(code: string){
    const index = this.findBook(code)[1];
    this.books.splice(index, 1);
  }

  private findBook(code: string): [Book, number] {
    const bookIndex = this.books.findIndex(prod => prod.code === code);
    const book = this.books[bookIndex];
    if (!book){
      throw new NotFoundException('could not find book.'); 
    }
    return [book, bookIndex];
  }
 */}


@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Members)
    private membersRepository: Repository<Members>,
  ){}

  findAll(): Promise<Members[]> {
    return this.membersRepository.find();
  }

  findOne(code: string): Promise<Members> {
    return this.membersRepository.findOne(code);
  }

  createMembers(members: Members): Promise<Members>{
    return this.membersRepository.save(members);
  }
  
  async remove(code: string): Promise<void> {
    await this.membersRepository.delete(code);
  }

  async update(members: Members): Promise<void> {
    await this.membersRepository.update(members.code, members);
  }

  async delete(code: string): Promise<void> {
    await this.membersRepository.delete(code);
  }

  /* private members: Member[] = [];

  insertMember(code: string, name: string, borrowSum: number, penaltyStat:string) {
    const newMember = new Member(code, name, borrowSum, penaltyStat);
    this.members.push(newMember);
    return code;
  }

  getMembers(){
    return [...this.members];
  }

  getOneMember(code : string){
    const member = this.findMember(code)[0];
    return {...member};
  }

  updateMember(code: string, name: string, borrowSum: number, penaltyStat:string){
    const [member, index] = this.findMember(code);
    const updateMember = {...member};
    if (name) {
        updateMember.name = name;
    }
    if (borrowSum != 0) {
      updateMember.borrowSum = borrowSum;
    } else {
      updateMember.borrowSum = 0;
    }
    
    if (penaltyStat) {
      updateMember.penaltyStat = penaltyStat;
  }
    this.members[index] = updateMember;
  }

  deleteMember(code: string){
    const index = this.findMember(code)[1];
    this.members.splice(index, 1);
  }

  private findMember(code: string): [Member, number] {
    const memberIndex = this.members.findIndex(prod => prod.code === code);
    const member = this.members[memberIndex];
    if (!member){
      throw new NotFoundException('could not find member.'); 
    }
    return [member, memberIndex];
  } */
}

@Injectable()
export class BorrowsService {
  constructor(
    @InjectRepository(Borrows)
    private borrowsRepository: Repository<Borrows>,
  ){}

  findAll(): Promise<Borrows[]> {
    return this.borrowsRepository.find();
  }

  findOne(code_Book: string): Promise<Borrows> {
    return this.borrowsRepository.findOne(code_Book);
  }

  createBorrows(borrows: Borrows): Promise<Borrows>{
    return this.borrowsRepository.save(borrows);
  }

  async remove(code_Book: string): Promise<void> {
    await this.borrowsRepository.delete(code_Book);
  }

  async update(borrows: Borrows): Promise<void> {
    await this.borrowsRepository.update(borrows.code_Book, borrows);
  }

  async delete(code_Book: string): Promise<void> {
    await this.borrowsRepository.delete(code_Book);
  }

  /* private borrows: Borrow[] = [];

  insertBorrow(codeBook: string, borrowDate: Date, nameMember: string) {
    const newBorrow = new Borrow(codeBook, borrowDate, nameMember);
    this.borrows.push(newBorrow);
    return codeBook;
  }

  getBorrows(){
    return [...this.borrows];
  }

  getOneBorrow(codeBook : string){
    const borrow = this.findBorrow(codeBook)[0];
    return {...borrow};
  }

  updateBorrow(codeBook: string, borrowDate: Date, nameMember: string){
    const [borrow, index] = this.findBorrow(codeBook);
    const updateBorrow = {...borrow};
    if (borrowDate) {
        updateBorrow.borrowDate = borrowDate;
    }
    if (nameMember) {
        updateBorrow.nameMember = nameMember;
    }
    this.borrows[index] = updateBorrow;
  }

  deleteBorrow(codeBook: string){
    const index = this.findBorrow(codeBook)[1];
    this.borrows.splice(index, 1);
  }

  private findBorrow(codeBook: string): [Borrow, number] {
    const borrowIndex = this.borrows.findIndex(prod => prod.codeBook === codeBook);
    const borrow = this.borrows[borrowIndex];
    if (!borrow){
      throw new NotFoundException('could not find borrow data.'); 
    }
    return [borrow, borrowIndex];
  } */
}
