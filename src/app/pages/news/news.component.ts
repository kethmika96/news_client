import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  constructor(private postService:PostService, private snackBar: MatSnackBar){}

  allpost:any;

  ngOnInit(){
    this.getAllpost();
  }
 
  getAllpost(){
    this.postService.getAllPosts().subscribe(res=>{
      console.log(res);
      this.allpost=res;
    }, error=>{
      this.snackBar.open("something went wrong" , "ok");

    })
    
  }
}
