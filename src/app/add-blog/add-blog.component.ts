import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  form: FormGroup;
  voteup : number =0;
  votedown : number =0


  constructor(private blogService:BlogServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),

      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      


    });
  }

  

  submit(){

    console.log(this.form.value);
    var object = {"id":this.form.value.id,"title": this.form.value.title ,"content": this.form.value.content ,"author": this.form.value.author ,"upvote": this.voteup,"downvote": this.votedown}
    console.log("object :", object);

    this.blogService.createBlog(object).subscribe(res => {

         console.log('Blog created successfully!');

         this.router.navigateByUrl('blogs');

    })

  }

  upvote() {
    console.log("up")
    this.voteup++
  }

  downvote() {
    console.log("down")
    this.votedown++

  }

}
