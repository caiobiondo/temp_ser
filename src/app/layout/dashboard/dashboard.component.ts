import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Suporte', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'DA', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'DS', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'DA', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'SUPORTE', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'DS', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'DA', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor() {
        this.places = [



        ];
    }

    ngOnInit() {}
}
