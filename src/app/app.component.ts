import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Angular App';

  constructor(@Inject('mail') private mail){

  }

  public onUpdate(id, text){
    this.mail.update(id, text);
  }
}
