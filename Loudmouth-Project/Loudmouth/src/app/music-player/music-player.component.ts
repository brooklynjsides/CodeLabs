import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent {
  public slides = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/en/a/ab/AtLongLastASAPCover.jpg',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/en/5/56/1999_Joey_Badass.jpg',
    },
    {
      src: 'https://external-preview.redd.it/AsF1dEt6PNQIKe3I5zbJcF0BqMdJSwu3u95feyjCy-E.jpg?width=960&crop=smart&auto=webp&s=d47e58095e255dfb46b1dd10585cf27dd5277c19',
    },
  ];
}
