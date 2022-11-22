import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './error/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountComponent} from './account/account.component';
import {TemplateComponent} from './template/template.component';
import {MatCardModule} from "@angular/material/card";
import {RegisterMailComponent} from './account/register-mail/register-mail.component';
import {RegisterCsComponent} from './account/register-cs/register-cs.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UnderDevelopmentComponent} from './under-development/under-development.component';
import {LoadingComponent} from './components/loading/loading.component';
import {LoadingService} from "./components/loading/loading.service";
import {LoadingInterceptor} from "./components/loading/loading.interceptor";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AccountComponent,
    TemplateComponent,
    RegisterMailComponent,
    RegisterCsComponent,
    UnderDevelopmentComponent,
    LoadingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
