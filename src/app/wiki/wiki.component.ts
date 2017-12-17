import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  searchKeyword = "";
  // receivedDataFromWikipedia: any;
  articleList = [];

  showLoadingData = false;

  constructor(
    private wikiService: WikiService
  ) { }

  ngOnInit() {
  }

  searchWikipedia() {
    // get the search keyword and call wikipedia api to find similar articles
    this.articleList = [];

    this.showLoadingData = true;
    console.log('debug here');
    this.wikiService.fetchDataFromWikipedia(this.searchKeyword).subscribe(
      (response) => {
        let dataReceived = response['query']['pages'];

        for (var key in dataReceived) {
          let thumbnailUrl = '';
          let title = dataReceived[key]['title'];
          let content = dataReceived[key]['extract'];
          if ('thumbnail' in dataReceived[key]) {
            thumbnailUrl = dataReceived[key]['thumbnail']['source']
          }
          this.articleList.push(
            {
              'title': title,
              'content': content,
              'thumbnail': thumbnailUrl
            }
          );
        }
      },
      (err) => {
        console.error('error occured while fetching data from wikipedia api', err);
      },
      ()=>{
        this.showLoadingData = false;
      }
    );
    this.searchKeyword = "";
  }

}