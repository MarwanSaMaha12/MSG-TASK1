import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Import the RegisterComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },   // Route for login page
  { path: 'register', component: RegisterComponent },  // Route for register page
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Optional: Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
