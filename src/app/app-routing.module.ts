import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from "./user-details/user-details.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
