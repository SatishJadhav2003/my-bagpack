import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagpackComponent } from './BagPack/bagpack/bagpack.component';
import { SubjectsComponent } from './BagPack/subjects/subjects.component';
import { Os1Component } from './BagPack/subjects/os1/os1.component';
import { HomeComponent } from './home/home.component';
import { ComputerNetworks2Component } from './BagPack/subjects/computer-networks2/computer-networks2.component';
import { Chapter1Component } from './BagPack/subjects/os1/chapter1/chapter1.component';
import { FdsComponent } from './BagPack/subjects/fds/fds.component';
import { IntroDSComponent } from './BagPack/subjects/fds/intro-ds/intro-ds.component';
import { PPComponent } from './BagPack/subjects/pp/pp.component';
import { WtComponent } from './BagPack/subjects/wt/wt.component';
import { JavaComponent } from './BagPack/subjects/java/java.component';
import { TcsComponent } from './BagPack/subjects/tcs/tcs.component';
import { BtComponent } from './BagPack/subjects/bt/bt.component';
import { SuggestComponent } from './suggest/suggest.component';
import { FiniteAutomataComponent } from './BagPack/subjects/tcs/finite-automata/finite-automata.component';
import { AboutComponent } from './about/about.component';
import { IntroJavaComponent } from './BagPack/subjects/java/intro-java/intro-java.component';
import { IntroPythonComponent } from './BagPack/subjects/pp/intro-python/intro-python.component';
import { ApplicationLayerComponent } from './BagPack/subjects/computer-networks2/application-layer/application-layer.component';
import { ProgrammsComponent } from './programms/programms.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NotDoneComponent } from './not-done/not-done.component';
import { IntroToBlockchainComponent } from './BagPack/subjects/bt/intro-to-blockchain/intro-to-blockchain.component';
import { OperatingSystemProgrammComponent } from './programms/operating-system-programm/operating-system-programm.component';
import { WebTechnologyProgrammsComponent } from './programms/web-technology-programms/web-technology-programms.component';
import { JavaProgrammsComponent } from './programms/java-programms/java-programms.component';
import { FdsProgrammsComponent } from './programms/fds-programms/fds-programms.component';
import { OSA1Component } from './programms/operating-system-programm/os-a1/os-a1.component';
import { OSA2Component } from './programms/operating-system-programm/os-a2/os-a2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bagpack', component: BagpackComponent },
  { path: 'bagpack/subjects/not-done', component: NotDoneComponent },
  { path: 'bagpack/notes', component: SubjectsComponent },
  {path:'bagpack/subjects',component:SubjectsComponent},
  {path:'bagpack/assignment',component:AssignmentComponent},

  { path: 'bagpack/subjects/operating-system-1', component: Os1Component },
  { path: 'bagpack/subjects/os-1/chapter-1', component: Chapter1Component },

  { path: 'bagpack/subjects/computer-networks-2', component: ComputerNetworks2Component },
  { path: 'bagpack/subjects/computer-networks-2/application-layer', component: ApplicationLayerComponent },

  { path: 'bagpack/subjects/foundation-Data-science', component: FdsComponent },
  { path: 'bagpack/subjects/fds/intro-ds', component: IntroDSComponent },

  { path: 'bagpack/subjects/python-programming', component: PPComponent },
  { path: 'bagpack/subjects/python-programming/intro-to-python', component: IntroPythonComponent },

  { path: 'bagpack/subjects/web-technology', component: WtComponent },

  { path: 'bagpack/subjects/java-1', component: JavaComponent },
  { path: 'bagpack/subjects/java/introduction-to-java', component: IntroJavaComponent },

  { path: 'bagpack/subjects/TCS', component: TcsComponent },
  { path: 'bagpack/subjects/TCS/finite-autometa', component: FiniteAutomataComponent },

  { path: 'bagpack/subjects/blockchain-technology', component: BtComponent },
  { path: 'bagpack/subjects/blockchain-technology/intro-to-blockchain', component: IntroToBlockchainComponent },

  { path: 'suggest', component: SuggestComponent },

  {path:'bagpack/programms',component:ProgrammsComponent},
  {path:'programms',component:ProgrammsComponent},
  {path:'bagpack/programms/operating-system',component:OperatingSystemProgrammComponent,
  children:[
    {path:'Assignment-1',component:OSA1Component},
    {path:'Assignment-2',component:OSA2Component}
  ]},
  {path:'bagpack/programms/web-technology',component:WebTechnologyProgrammsComponent},
  {path:'bagpack/programms/java',component:JavaProgrammsComponent},
  {path:'bagpack/programms/fds',component:FdsProgrammsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
