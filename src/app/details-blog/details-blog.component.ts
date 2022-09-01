import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from './../services/blog-service.service';

@Component({
  selector: 'app-details-blog',
  templateUrl: './details-blog.component.html',
  styleUrls: ['./details-blog.component.css']
})
export class DetailsBlogComponent implements OnInit {
blog
id;
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.blogService.getBlogById(this.id).subscribe( data => {
      this.blog = data;
    });
  }
  }


