import { Component, OnInit } from '@angular/core';
import { Book } from '../../book-cart/book';


@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    bookList = [
        new Book({
            title: 'eXtreme Programming Explained',
            pictureUrl: 'https://robohash.org/a'
        }),
        new Book({
            title: 'ReWork',
            pictureUrl: 'https://robohash.org/b'
        })
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
