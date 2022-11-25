import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from "./account/account.component";
import {HomeComponent} from "./home/home.component";
import {TemplateComponent} from "./template/template.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {RegisterCsComponent} from "./account/register-cs/register-cs.component";
import {RegisterMailComponent} from "./account/register-mail/register-mail.component";
import {UnderDevelopmentComponent} from "./under-development/under-development.component";
import {RelatedSitesComponent} from "./related-sites/related-sites.component";
import {CsMonitoringComponent} from "./cs-monitoring/cs-monitoring.component";
import {LanMapComponent} from "./lan-map/lan-map.component";

const routes: Routes = [
  // Routes
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account/register_cs', component: RegisterCsComponent},
  {path: 'account/register_mail', component: RegisterMailComponent},
  {path: 'cs-monitoring', component: CsMonitoringComponent},
  {path: 'lan-map', component: LanMapComponent},
  {path: 'related-sites', component: RelatedSitesComponent},
  {path: 'under-development', component: UnderDevelopmentComponent},
  // template (not need for contents)
  {path: 'template', component: TemplateComponent},

  // redirect: /(root) -> /home
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // undefined path 404
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
