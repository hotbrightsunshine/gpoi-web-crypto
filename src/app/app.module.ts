import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about/about.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { NewsPageComponent } from './pages/news/news.component';

import { AppRoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NewsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
