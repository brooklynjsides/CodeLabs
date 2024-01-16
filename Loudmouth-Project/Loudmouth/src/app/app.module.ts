import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { LibraryComponent } from './library/library.component';
import { FooterComponent } from './footer/footer.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { QueueComponent } from './queue/queue.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecentPlaylistComponent } from './home/recent-playlist/recent-playlist.component';
import { RecentArtistsComponent } from './home/recent-artists/recent-artists.component';
import { ExploreComponent } from './home/explore/explore.component';
import { AppRoutingModule } from './app-routing.module';
import { SpotifyService } from './shared/spotify-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SlideshowComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    LibraryComponent,
    FooterComponent,
    MusicPlayerComponent,
    QueueComponent,
    SidebarComponent,
    RecentPlaylistComponent,
    RecentArtistsComponent,
    ExploreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
