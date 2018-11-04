import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {MatTableModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
