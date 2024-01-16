import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  spotifyKey = '';
  apiFirstPartURL = 'https://api.spotify.com/v1';
  authURL = 'https://accounts.spotify.com/authorize';
  scopesArray = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify',
  ];

  query_param = {
    client_id: '',
    response_type: 'code',
    redirectUri: 'http://127.0.0.1:4200/dashboard/',
    scopes: this.scopesArray.join(' '),
    showDialog: true,
  };

  Oauth = `${this.authURL}?client_id=${
    this.query_param.client_id
  }&redirect_uri=${encodeURIComponent(
    this.query_param.redirectUri
  )}&scope=${encodeURIComponent(
    this.query_param.scopes
  )}&response_type=token&state=123`;

  headers = new HttpHeaders({
    Authorization: 'Bearer' + this.spotifyKey,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  loginAuth() {
    window.open(this.Oauth);
  }

  setSpotifyKey(key) {
    this.spotifyKey = key;
  }

  setHeaders(headers) {
    this.headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.spotifyKey,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
  }

  fetchData(endPoint, method, bodyParam = null) {
    this.setHeaders(this.headers); //the header with the key should be set every fetch
    return this.http.request(method, `${this.apiFirstPartURL}/${endPoint}`, {
      headers: this.headers,
      body: bodyParam,
      responseType: 'json',
    });
  }

  //********************ALBUMS********************//

  // single album
  getAlbums(id: string) {
    return this.fetchData(`albums/${id}`, 'GET');
  }
}
