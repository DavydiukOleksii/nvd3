import { forEach } from '@angular/router/src/utils/collection';
import { chartData } from "./../chartData";
import { chartElement } from '../chartElement';

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    constructor(private http:Http){}

    private data: Promise<chartElement[]>;

    public getData() : Promise<chartElement[]>{
        return this.getJSON();
    }

    private getJSON() : Promise<chartElement[]>{
        return this.http.get('./data/data.json')
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleErrorPromise);
        }

    private extractData(res: Response) {
        let data = res.json();
        return data;
    } 

    private handleErrorPromise (error: Response | any) {
        console.log("error");
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    } 
}