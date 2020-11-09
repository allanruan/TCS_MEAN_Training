import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'quiz', component: QuizComponent},
  // { path: 'contact', component: ContactComponent},
  // { path: 'support', component: SupportComponent, children:[
  //     {path:'',redirectTo:'customer-support', pathMatch:'full'}, 
  //     {path:'customer-support',component:CustomerSupportComponent},
  //     {path:'supplier-support',component:SupplierSupportComponent}
  // ]
  // },
  // { path: '**', component: NotFoundComponent },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}

