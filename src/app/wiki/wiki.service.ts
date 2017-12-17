import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// url: https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=<keyword>

@Injectable()
export class WikiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchDataFromWikipedia(keyword: string) {

    let url =  `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${keyword}&origin=*`;

    return this.httpClient.get(url);
  }
}