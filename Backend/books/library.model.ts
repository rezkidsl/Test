import { stringify } from "querystring";

export class Book {
  constructor (
     public code: string, 
     public title: string, 
     public author: string, 
     public stock: number
  ){}
}

export class Member {
  constructor (
      public code: string,
      public name: string,
      public borrowSum : number,
      public penaltyStat : string
  ){}
}

export class Borrow {
  constructor (
    public codeBook: string,
    public borrowDate : Date,
    public nameMember : string
  ){}
}
