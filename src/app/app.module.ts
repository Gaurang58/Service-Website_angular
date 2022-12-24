import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { SEOComponent } from './pages/seo/seo.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CMSComponent } from './pages/cms/cms.component';
import { CRMComponent } from './pages/crm/crm.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    WebDevelopmentComponent,
    WebDesignComponent,
    SEOComponent,
    DigitalMarketingComponent,
    GraphicComponent,
    PagenotfoundComponent,
    CMSComponent,
    CRMComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
