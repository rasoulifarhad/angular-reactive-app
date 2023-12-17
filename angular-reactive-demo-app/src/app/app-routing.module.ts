import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { courseDetailResolver } from './course-detail/course-detail.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'all-lessons',
    component: AllLessonsComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
    resolve: {
      detail: courseDetailResolver
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
