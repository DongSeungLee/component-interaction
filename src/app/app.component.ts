import {Component} from '@angular/core';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  users: User[];
  selected: string;

  constructor() {
    this.users = [
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Park', 'Designer')
    ];
    this.selected = 'Developer';
  }

  addUser(name: string, role: string): void {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(entity => entity.id)) + 1 : 1;
  }
  // child에게서 받은 custom event handler로 호출 된 removeUser를 사용해서 business logic을 수행!
  removeUser(target: User): void {
    this.users = this.users.filter(({id}) => id !== target.id);
  }
}
