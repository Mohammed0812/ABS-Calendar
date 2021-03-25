import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanuaryComponent } from './january/january.component';
import { FebruaryComponent } from './february/february.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './event-list/event-list.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    JanuaryComponent,
    FebruaryComponent,
    AprilComponent,
    MayComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
