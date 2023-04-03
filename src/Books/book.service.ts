import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import { Book } from "./book.entity";

@Injectable()
export class BookService{
    constructor(
        @InjectRepository(Book)
       private bookRepository:Repository<Book>){}

       getAll():Promise<Book[]>{
        return this.bookRepository.find();
}

     create(book:Book):Promise<Book>{
           return this.bookRepository.save(book);
}

   deleteById(id:number):string{
     this.bookRepository.delete(id);
     return 'Book deleted successfully...'
   }


   getById(id:number){
    return this.bookRepository.findOneBy({id});
   }
}

