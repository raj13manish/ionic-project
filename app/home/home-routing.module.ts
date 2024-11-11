import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('../pages/course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('../pages/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('../pages/practice-test/practice-test.module').then( m => m.PracticeTestPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('../pages/status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('../pages/score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'profle-main',
    loadChildren: () => import('../pages/profle-main/profle-main.module').then( m => m.ProfleMainPageModule)
  },
  {
    path: 'time-table',
    loadChildren: () => import('../pages/time-table/time-table.module').then( m => m.TimeTablePageModule)
  },
  {
    path: 'web-test',
    loadChildren: () => import('../pages/web-test/web-test.module').then( m => m.WebTestPageModule)
  },
  {
    path: 'cyber-test',
    loadChildren: () => import('../pages/cyber-test/cyber-test.module').then( m => m.CyberTestPageModule)
  },
  {
    path: 'ai-test',
    loadChildren: () => import('../pages/ai-test/ai-test.module').then( m => m.AiTestPageModule)
  },
  {
    path: 'ml-test',
    loadChildren: () => import('../pages/ml-test/ml-test.module').then( m => m.MlTestPageModule)
  },
  {
    path: 'data-science-test',
    loadChildren: () => import('../pages/data-science-test/data-science-test.module').then( m => m.DataScienceTestPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('../pages/pages/terms/terms.module').then( m => m.TermsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
