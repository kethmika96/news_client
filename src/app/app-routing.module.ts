import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';

import { NewsComponent } from './pages/news/news.component';
import { ViewNewsComponent } from './pages/view-news/view-news.component';

const routes: Routes = [{path:'create-post', component:CreatePostComponent},
                        
                        {path:'viewall', component:NewsComponent},
                        {path:'view-news/:id', component:ViewNewsComponent}
                                              
                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
