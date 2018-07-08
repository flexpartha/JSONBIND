import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ReturnsCountryFlagService } from 'app/returns-json-array.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.CountryFlag.html',
    providers:[ReturnsCountryFlagService]
})

export class CountryFlag{
    countryFlafData:Observable<Array<any>>;
    constructor(private cnfService:ReturnsCountryFlagService){
        this.countryFlafData=cnfService.getCoutryFlagInfo();
    }
}