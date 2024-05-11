import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrl: './view-news.component.scss'
})
export class ViewNewsComponent {
  
  postId = this.activateRoute.snapshot.params['id'];
  postData:any;

  constructor(private postService: PostService,
    private activateRoute:ActivatedRoute,
    private matSnakBar: MatSnackBar,
  ){}

  ngOnInit(){
    console.log(this.postId);
    this.getPostById();
  }

  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData =res;
      console.log(res);

    },error=> {
      this.matSnakBar.open("Something went Wrong..","ok")
    })
  }

}
