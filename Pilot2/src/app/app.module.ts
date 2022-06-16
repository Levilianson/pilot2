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
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PorcComponent } from './Cuerpo/porc/porc.component';
import { ProyComponent } from './Cuerpo/proy/proy.component';
import { FootComponent } from './Footer/foot/foot.component';

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
    BodyComponent,
    PorcComponent,
    ProyComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({     
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
