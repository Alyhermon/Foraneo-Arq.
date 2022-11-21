import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: 'Inicio', component: HomePageComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contactos', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
