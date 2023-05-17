import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { DashbordComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,PB_DIRECTION } from 'ngx-ui-loader';
const loader:NgxUiLoaderConfig={
  text:"loading...",
  textColor:"#ffffff",
  textPosition:"center-center",
  pbColor:"red",
  bgsColor:"red",
  fgsColor:"red",
  fgsType:SPINNER.ballSpinClockwise,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
  
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullComponent,
    HeaderComponent,
    AppSidebarComponent,
    AboutComponent,
    DashbordComponent,
    LoginComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule ,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(loader)
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:  const [NO_ERRORS_SCHEMA]
  schemas:  [NO_ERRORS_SCHEMA]
})
export class AppModule { }
