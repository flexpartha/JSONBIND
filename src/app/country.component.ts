import{Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReturnsCountryService } from 'app/returns-json-array.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.Country.html',
    providers:[ReturnsCountryService]
})

export class Country{
    countryData:Observable<Array<any>>;
    constructor(private cnService:ReturnsCountryService){
        this.countryData=cnService.getCoutriesInfo();
    }
}