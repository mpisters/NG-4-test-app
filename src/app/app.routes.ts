import {HomeComponent} from "./home-component/home-component.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [{ path: '', component:HomeComponent}];

export const routes: ModuleWithProviders =  RouterModule.forRoot(appRoutes);
