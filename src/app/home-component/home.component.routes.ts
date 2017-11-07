import {HomeComponent} from "./home-component.component";
import {RouterModule} from "@angular/router";

const routes = [ {path: '', component: HomeComponent}];

export default RouterModule.forChild(routes)
