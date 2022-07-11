import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pueblos-magicos',
  templateUrl: './pueblos-magicos.page.html',
  styleUrls: ['./pueblos-magicos.page.scss'],
})
export class PueblosMagicosPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:1337/api/posts')
    .subscribe(res=> {
      console.log(res)
      this.characters = res.results
    })
  }

}
