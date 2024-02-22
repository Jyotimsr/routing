import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "Home", component:HomeComponent},
  {path: "About", component:AboutComponent},
  {path: "Contact", component:ContactComponent},
  {path: "Course", component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
