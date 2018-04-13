import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddButtonsComponent } from './components/add-buttons/add-buttons.component';
import { ResultsComponent } from './components/results/results.component';

// -- routes
const routes: Routes = [
  { path: '',  component: HomePageComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddButtonsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
