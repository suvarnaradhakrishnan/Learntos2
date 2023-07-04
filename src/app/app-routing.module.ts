import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [{path:'Home', component: BlogsComponent}, {path:'', redirectTo: 'Home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
