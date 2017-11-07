import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home-component/home-component.module'},
  { path: 'contacts', loadChildren: 'app/contacts/contacts.module'}
];

export const routes: ModuleWithProviders =  RouterModule.forRoot(appRoutes);
