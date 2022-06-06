import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Headers/header/header.component';
import { LogoComponent } from './Headers/logo/logo.component';
import { SocialComponent } from './Headers/social/social.component';
import { BannerComponent } from './Headers/banner/banner.component';
import { AcrkdComponent } from './Headers/acrkd/acrkd.component';
import { ExperienciaComponent } from './Cuerpo/experiencia/experiencia.component';
import { EducacionComponent } from './Cuerpo/educacion/educacion.component';
import { BodyComponent } from './Cuerpo/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    AcrkdComponent,
    ExperienciaComponent,
    EducacionComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
