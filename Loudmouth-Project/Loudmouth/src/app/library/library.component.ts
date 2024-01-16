import { publishFacade } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from '../shared/spotify-api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  public searchQuery: string = null;
  public artists = [];

  constructor(private _spotifySearch: SpotifyService) {}

  ngOnInit(): void {}
}
