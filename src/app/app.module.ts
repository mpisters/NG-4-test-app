import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { FormComponent } from './form/form.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, FormsModule, routes
  ],
  providers: [{provide: 'mail', useClass: MailService}],
  bootstrap: [AppComponent]
})

export class AppModule {}
