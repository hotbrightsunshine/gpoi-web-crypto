import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutPageComponent } from "../pages/about/about.component";
import { HomePageComponent } from "../pages/homepage/homepage.component";
import { NewsPageComponent } from "../pages/news/news.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "news", component: NewsPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
