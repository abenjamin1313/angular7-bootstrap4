import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Services
import { ErrorHandlerService }  from './services/error-handler.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide: ErrorHandler, useClass: ErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
