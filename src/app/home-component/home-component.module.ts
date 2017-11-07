import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home-component.component";
import HomeComponentRoutes from "./home.component.routes";
@NgModule({
  imports: [CommonModule, HomeComponentRoutes],
  declarations: [HomeComponent]
})

export default class HomeModule{}
