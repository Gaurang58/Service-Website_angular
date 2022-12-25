import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { SEOComponent } from './pages/seo/seo.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CMSComponent } from './pages/cms/cms.component';
import { CRMComponent } from './pages/crm/crm.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'graphic',component:GraphicComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'webdevelopment',component:WebDevelopmentComponent},
  {path:'webdesign',component:WebDesignComponent},
  {path:'SEO',component:SEOComponent},
  {path:'digital-marketing',component:DigitalMarketingComponent},
  {path:'cms',component:CMSComponent},
  {path:'crm',component:CRMComponent},
  { path: '**', pathMatch: 'full',component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
