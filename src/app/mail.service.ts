import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [{id: 1, text:"Hello world!"}, {id:2, text: "How is it going?"}, {id:3, text:"Finally Weekend!"}];
  constructor() { }

  update(id, text){
    this.messages = this.messages.map( m =>
      m.id === id ? {id, text} : m)
  }
}
