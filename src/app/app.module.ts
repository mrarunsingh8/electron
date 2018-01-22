import { NgxElectronModule } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { routes } from './route';
import { MatDesignModule } from './mat.design.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './home/highlight.directive';
import { ExecuteDirective } from './home/execute.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    ExecuteDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    RouterModule.forRoot(routes),
    MatDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
