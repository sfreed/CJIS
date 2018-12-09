import { Injectable } from '@angular/core';


export class List {
    id: number;
    text: string;
}

const navigation: List[] = [
    { id: 1, text: 'Products' },
    { id: 2, text: 'Sales' },
    { id: 3, text: 'Customers' },
    { id: 4, text: 'Employees' },
    { id: 5, text: 'Reports' }
];

@Injectable()
export class Service {
    getNavigationList(): List[] {
        return navigation;
    }
}
