import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseComponent } from './course/course.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [AppComponent, TopMenuComponent, HomeComponent, LoginComponent, AllLessonsComponent, LoadingComponent, MessagesComponent, CoursesListComponent, LessonsListComponent, CourseComponent, LessonDetailComponent, CourseDetailComponent, BrowserEventExperimentsComponent, CourseDetailHeaderComponent, CreateLessonComponent, EventBusExperimentsComponent, LessonsCounterComponent, NewsletterComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
