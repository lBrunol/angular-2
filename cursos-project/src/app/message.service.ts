import { Injectable, EventEmitter } from '@angular/core';
import { toast } from "angular2-materialize";

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    toast(message, 5000);
    //this.messages.push(message);
  }

  clear() {
    this.messages.length = 0;
  }
}