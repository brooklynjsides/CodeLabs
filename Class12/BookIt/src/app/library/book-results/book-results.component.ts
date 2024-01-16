import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent {
  allBooks: Book[] = [
    new Book(
      'Harry Potter',
      'JKR',
      'Fantasy',
      'https://assets.wfcdn.com/im/85331222/resize-h445%5Ecompr-r85/4049/40493765/Modern+%26+Contemporary+On+Polymeric+Graphic+Art.jpg'
    ),

    new Book(
      '1984',
      'George Orwell',
      'Dystopian',
      'https://d3525k1ryd2155.cloudfront.net/f/935/524/9780451524935.RH.0.l.jpg'
    ),

    new Book(
      'Farenheit 451',
      'Ray Bradbury',
      'Dystopian',
      'https://www.arts.gov/sites/default/files/Fahrenheit%20451%20Cover.jpg'
    ),
  ];
}
