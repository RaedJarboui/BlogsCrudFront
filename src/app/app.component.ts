import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from './services/blog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchValue:any
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) { }

  ngOnInit(): void {
  
  }
  title = 'BlogsCrud';


}

