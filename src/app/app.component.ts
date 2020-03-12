import { Component,OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import {AppService} from './app.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [
        AppService
    ]
})
// export class AppComponent  {
//   name = 'Angular 6';
//    dropdownEnabled = true;
//     items: TreeviewItem[];
//     values: number[];
//     config = TreeviewConfig.create({
//         hasAllCheckBox: true,
//         hasFilter: true,
//         hasCollapseExpand: true,
//         decoupleChildFromParent: false,
//         maxHeight: 400
//     });

//     buttonClasses = [
//         'btn-outline-primary',
//         'btn-outline-secondary',
//         'btn-outline-success',
//         'btn-outline-danger',
//         'btn-outline-warning',
//         'btn-outline-info',
//         'btn-outline-light',
//         'btn-outline-dark'
//     ];
//     buttonClass = this.buttonClasses[0];

//     constructor(
//         private service: AppService
//     ) { }

//     ngOnInit() {
//         this.items = this.service.getBooks();
//     }

//     onFilterChange(value: string) {
//         console.log('filter:', value);
//     }
// }




export class AppComponent implements OnInit {
    dropdownEnabled = true;
    items: TreeviewItem[];
    values: number[];
    config = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasFilter: true,
        hasCollapseExpand: true,
        decoupleChildFromParent: false,
        maxHeight: 400
    });

    buttonClasses = [
        'btn-outline-primary',
        'btn-outline-secondary',
        'btn-outline-success',
        'btn-outline-danger',
        'btn-outline-warning',
        'btn-outline-info',
        'btn-outline-light',
        'btn-outline-dark'
    ];
    buttonClass = this.buttonClasses[0];

    constructor(
        private service: AppService
    ) { }

    ngOnInit() {
        this.items = this.service.getBooks();
    }

    onFilterChange(value: string) {
        console.log('filter:', value);
    }
}
