import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServiceService } from './../services/blog-service.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
   blogs;
   search:string
  constructor(private blogService:BlogServiceService,private router:Router) { 

  }

  ngOnInit(): void {
    this.blogService.getBlogsList().subscribe(data => {
      this.blogs = data;
    });
  }

  blogDetails(id: number){
    this.router.navigate(['blog', id]);
  }

}
