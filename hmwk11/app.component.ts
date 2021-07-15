import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable, Subscription } from 'rxjs';

export interface FirestoreRec {
  //initializing values
  color: string;
  message: string;
  timestamp: firebase.firestore.Timestamp;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chatapp';
  public items: FirestoreRec[];

  //initializing values
  color: string;
  message: string;
  username: string;

  constructor(private db: AngularFirestore) {}

  async ngOnInit(): Promise<void> {
    this.username = localStorage.getItem('username');
    this.color = localStorage.getItem('color');

    const Obj: AngularFirestoreCollection<FirestoreRec> = this.db.collection<FirestoreRec>(
      'cs336-chat',
      (ref) => ref.orderBy('timestamp', 'asc')
    );
    this.items = Obj.valueChanges().subscribe((res) => {
      this.items = res;
    });
  }

  send_message(): void {
    this.db.collection('cs336-chat').add({
      color: this.color,
      message: this.message,
      username: this.username,
      timestamp: new Date(),
    });
    //reset the messagebox after sending
    this.message = '';
    localStorage.setItem('color', this.color);
    localStorage.setItem('username', this.username);
  }
}
