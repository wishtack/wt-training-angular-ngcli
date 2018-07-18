import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    editedUser: User;

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    updateEditedUser(user: User) {
        this._userStore.replaceUser(this.editedUser, user);
        this.editedUser = null;
    }

}
