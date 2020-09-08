import { Component,  Input, Output, EventEmitter } from '@angular/core';
import {User} from '../models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styles: [
  ]
})
export class UserListComponent  {
  private _users: User[];

  // 역할별 사용자 카운터
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;
  cntTotal: number;
  // 부모 컴포넌트가 전달한 정보에서 필요한 정보를 추출하여 컴포넌트 프로퍼티에 바인딩한다.
  // set users에서 method이름이 반드시 부모 component에서 정의한 property와 같아야 한다!
  @Input()
  set users(users: User[]) {
    if (!users) { return; }
    this.cntAdmin
      = users.filter(({role}) => role === 'Administrator').length;
    this.cntDeveloper
      = users.filter(({role}) => role === 'Developer').length;
    this.cntDesigner
      = users.filter(({role}) => role === 'Designer').length;
    this._users = users;
    this.cntTotal = this.cntAdmin + this.cntDesigner + this.cntDeveloper;
  }

  get users(): User[] {
    return this._users;
  }
// custom event handler를 remove라고 이를 emit해서 event Handler를 parent로 전달!
  @Output() remove = new EventEmitter<User>();
}
