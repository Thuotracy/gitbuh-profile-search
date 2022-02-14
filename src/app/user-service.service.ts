import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Environment } from './environments/environments';
// import { Environment } from '../environments/environment.prod';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  newUser: User;
  newRepo: Repo;
  apiKey: string = Environment.apiKey;
  //apiUrl = environment.apiKey;

  constructor(private http: HttpClient) {
    this.newUser = new User('', '', '', '', '', '', 0, 0, 0, new Date());
    this.newRepo = new Repo('', '', '', new Date(), '');
  }

  // getting user details from the server
  getUserDetail(username: string) {
    interface Profile {
      url: string;
      name: string;
      email: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Profile>(
          'https://api.github.com/users/' +
            username +
            '?access_token=' +
            Environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this.newUser = response;
            // console.log(this.newUser);
            resolve();
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });
    return promise;
  }

  // getting repo info from the server

  getRepoDetails(username) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      language: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Repos>(
          'https://api.github.com/users/' +
            username +
            '/repos?access_token=' +
            Environment.apiKey
        )
        .toPromise()
        .then(
          (results) => {
            this.newRepo = results;
            //console.log(results);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }
}