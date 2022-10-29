import { Component, OnInit } from '@angular/core';
import { User } from '../core/model/user';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public list: User[] = []
  public userIsAdmin: string = 'Admin'
  searchUser: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.list = this.userService.getUsers()
  }

  public deleteUser(user: User): void{
    this.userService.deleteUser(user)
  }

}
