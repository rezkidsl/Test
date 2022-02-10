import { Entity, Column, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class Books{
    @PrimaryColumn()
    code: string;
    @Column()
    title: string;
    @Column()
    author: string;
    @Column()
    stock: number;
    // @Column()
    // created_by: Timestamp;
    // @Column()
    // updated_by: Timestamp;
}

@Entity()
export class Members{
    @PrimaryColumn()
    code: string;
    @Column()
    name: string;
    @Column()
    borrowed_Book: number;
    @Column()
    penalty_stat: string;
    // @Column()
    // created_by: Timestamp;
    // @Column()
    // updated_by: Timestamp;
}

@Entity()
export class Borrows{
    @PrimaryColumn()
    code_Book: string;
    @Column()
    borrow_Date: Date;
    @Column()
    name_Member: string;
    // @Column()
    // created_by: Timestamp;
    // @Column()
    // updated_by: Timestamp;
}