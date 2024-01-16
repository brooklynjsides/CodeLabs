import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  albumbs: any;
}

export class Album {
  constructor(
    public title: string,
    public artist: string,
    public coverImagePath: string,
    public releaseYear: string
  ) {}
}
