import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home-component/home-component.component';
import { routes} from './app.routes';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [{provide: 'mail', useClass: MailService}],
  bootstrap: [AppComponent]
})

export class AppModule {}
