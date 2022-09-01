import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';

const routes: Routes = [
  {path: 'blogs', component: ListBlogComponent },
  {path: 'add/blog', component:AddBlogComponent },
  {path: '', redirectTo: 'blogs', pathMatch: 'full'},
  {path: 'blog/:id', component:DetailsBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
