import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ReturnsJsonArrayService } from 'app/returns-json-array.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.people.html',
    providers:[ReturnsJsonArrayService]
})

export class People{
    title = 'Angular app works Fine!';
    data:Observable<Array<any>>;
    constructor(private service:ReturnsJsonArrayService){
        this.data=service.getPeople();
    }
}