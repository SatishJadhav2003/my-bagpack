import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ComputerNetworks2Component } from "./computer-networks2/computer-networks2.component";
import { Chapter1Component } from "./os1/chapter1/chapter1.component";
import { Os1Component } from "./os1/os1.component";
import { SubjectsComponent } from "./subjects.component";
import { FdsComponent } from './fds/fds.component';
import { IntroDSComponent } from './fds/intro-ds/intro-ds.component';
import { WtComponent } from './wt/wt.component';
import { JavaComponent } from './java/java.component';
import { TcsComponent } from './tcs/tcs.component';
import { BtComponent } from './bt/bt.component';
import { FiniteAutomataComponent } from './tcs/finite-automata/finite-automata.component';
import { IntroJavaComponent } from './java/intro-java/intro-java.component';
import { IntroPythonComponent } from './pp/intro-python/intro-python.component';
import { ApplicationLayerComponent } from './computer-networks2/application-layer/application-layer.component';
import { IntroToBlockchainComponent } from './bt/intro-to-blockchain/intro-to-blockchain.component';
import { PPComponent } from "./pp/pp.component";

@NgModule({
declarations:[

  SubjectsComponent,
  Os1Component,
  ComputerNetworks2Component,
  Chapter1Component,
  FdsComponent,
  IntroDSComponent,
  WtComponent,
  JavaComponent,
  TcsComponent,
  BtComponent,
  FiniteAutomataComponent,
  IntroJavaComponent,
  IntroPythonComponent,
  ApplicationLayerComponent,
  IntroToBlockchainComponent,
  PPComponent
],
imports:[BrowserModule,
  AppRoutingModule,]
})

export class SubjectsModule{}
