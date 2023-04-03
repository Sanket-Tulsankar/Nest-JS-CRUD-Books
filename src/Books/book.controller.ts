import { Body, Controller, Get, Post } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { Book } from "./book.entity";
import { BookService } from "./book.service";


@Controller('book')
export class BookController{


    constructor(private readonly bookService: BookService) {}

    @Post('/add')
    addBook(@Body() book:Book){
      return this.bookService.create(book);
    }
  
    @Get('/getAll')
    getAll():Promise<Book[]>{
      return this.bookService.getAll();
    }

    @Get('/getById/:id')
    getById(@Param('id') id:number):Promise<Book>{
      return this.bookService.getById(id);
    }

    @Delete('delete/:id')
    deleteById(@Param('id') id:number):string{
       this.bookService.deleteById(id);
       return 'Deleted successfully...'
    }
}