import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from "./account/account.component";
import {HomeComponent} from "./home/home.component";
import {TemplateComponent} from "./template/template.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";

const routes: Routes = [
  // Routes
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  // template (not need for contents)
  {path: 'template', component: TemplateComponent},
  // undefined path
  {path: '**', component: PageNotFoundComponent},

  // Redirect
  // /(root) -> /home
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
