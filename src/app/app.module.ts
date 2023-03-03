import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BagpackComponent } from './BagPack/bagpack/bagpack.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsModule } from './BagPack/subjects/subjects.module';
import { SuggestComponent } from './suggest/suggest.component';
import { AboutComponent } from './about/about.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ProgrammsComponent } from './programms/programms.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NotDoneComponent } from './not-done/not-done.component';
import { OperatingSystemProgrammComponent } from './programms/operating-system-programm/operating-system-programm.component';
import { JavaProgrammsComponent } from './programms/java-programms/java-programms.component';
import { FdsProgrammsComponent } from './programms/fds-programms/fds-programms.component';
import { WebTechnologyProgrammsComponent } from './programms/web-technology-programms/web-technology-programms.component';
import { OSA1Component } from './programms/operating-system-programm/os-a1/os-a1.component';
import { OSA2Component } from './programms/operating-system-programm/os-a2/os-a2.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BagpackComponent,
    SuggestComponent,
    AboutComponent,
    ProgrammsComponent,
    AssignmentComponent,
    NotDoneComponent,
    OperatingSystemProgrammComponent,
    JavaProgrammsComponent,
    FdsProgrammsComponent,
    WebTechnologyProgrammsComponent,
    OSA1Component,
    OSA2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SubjectsModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
