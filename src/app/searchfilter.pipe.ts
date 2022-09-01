import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from './models/blog';
import { BlogServiceService } from './services/blog-service.service';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {


  transform(blogs:any,search: string): any {
    if(!blogs || !search){
      console.log("vide")

     return blogs;
    }else{
      console.log("not vide")
      console.log("search value :",search)
      console.log("blogs value :",blogs)

      return blogs.filter(blog=>
         blog.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
         blog.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
         blog.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())
         
         ); 
        
      
    }
  }

}
