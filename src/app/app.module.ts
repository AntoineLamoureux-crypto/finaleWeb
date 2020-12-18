import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { AfficherComponent } from './application/crud/afficher/afficher.component';
import { ErrorComponent } from './application/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ReadComponent,
    UpdateComponent,
    TutorielsComponent,
    ReactiveComponent,
    AfficherComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
