import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-pueblos-magicos',
  templateUrl: './pueblos-magicos.page.html',
  styleUrls: ['./pueblos-magicos.page.scss'],
})
export class PueblosMagicosPage implements OnInit {

  characters: any = []

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getposts().subscribe(
      (res) => {
        console.log("res", res)
        this.characters = res;
      }, (err) => console.log(err)
    );
  }

}
