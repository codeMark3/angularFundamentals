import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
    getAuthor() {
        return [
          "J. K. Rowling",
          "Stephen King",
          "Tom Clancy",
          "Lewis Carroll"
        ]
    }
}
