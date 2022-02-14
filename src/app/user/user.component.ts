import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  searchUsers = true;

  user: User;
  repo: Repo;
  username: string;

  constructor(
    public userService: UserServiceService,
    private repoService: UserServiceService
  ) {}

  getUser(username) {
    this.userService.getUserDetail(username).then(
      (results) => {
        this.user = this.userService.newUser;
        console.log(results);
      },
      (error) => {
        alert('Enter valid username');
        console.log(error);
      }
    );
    this.repoService.getRepoDetails(username).then(
      (results) => {
        this.repo = this.repoService.newRepo;
        console.log(results);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getUser('Thuotracy');
  }
}
//getUser() {
//this.userService.getUserDetails();
//this.user = this.userService.user;

// this.userService.getRepoDetails(this.username);
// this.repo = this.userService.repo;
// console.log(this.repo);
//}

//  this.searchUsers = !this.searchUsers;
//}

// ngOnInit() {
// this.userService.getUserDetails('default-007');
//this.user = this.userService.user;

//this.userService.getRepos(default-007);
//this.repo = this.userService.repo;
//}
//}
