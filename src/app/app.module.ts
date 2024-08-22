import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NotofundComponent } from './pages/notofund/notofund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    AyudaComponent,
    NotofundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
