import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Injectable({ providedIn: 'root' })
export class NavigationService {
  visibleSidebarLeft;

  visibleSidebarRight;

  items: MenuItem[] = [
    { label: 'Courts',  icon: 'fa fa-balance-scale',  items: [
      { label: 'Calendar', routerLink: 'calendar', command: () => this.visibleSidebarLeft = false },
      { label: 'Data Analysis and Reports', routerLink: 'data-analysis-reports', command: () => this.visibleSidebarLeft = false },
      { label: 'Documents', routerLink: 'documents', command: () => this.visibleSidebarLeft = false },
      { label: 'Fine Processing', routerLink: 'fine-processing', command: () => this.visibleSidebarLeft = false },
      { label: 'Payments', routerLink: 'payments', command: () => this.visibleSidebarLeft = false },
      { label: 'Processing', routerLink: 'processing', command: () => this.visibleSidebarLeft = false },
      { label: 'Warrants', routerLink: 'warrants', command: () => this.visibleSidebarLeft = false },
    ] },
    { label: 'Law Enforcement',  icon: 'fa fa-shield',  items: [
      { label: 'Activities', items: [
        { label: 'Field Interviews', routerLink: 'field-interviews', command: () => this.visibleSidebarLeft = false },
        { label: 'Protection Orders', routerLink: 'protection-orders', command: () => this.visibleSidebarLeft = false },
        { label: 'BOLO', routerLink: 'bolo', command: () => this.visibleSidebarLeft = false },
        { label: 'Criminal Trespassing', routerLink: 'ct-list' , command: () => this.visibleSidebarLeft = false },
        { label: 'Pawn', routerLink: 'pawn' , command: () => this.visibleSidebarLeft = false },
        { label: 'Photo Linups', routerLink: 'photo-linups' , command: () => this.visibleSidebarLeft = false },
        { label: 'Master Name', routerLink: 'master-name', command: () => this.visibleSidebarLeft = false }
      ] },
      { label: 'Call For Service', routerLink: 'call-for-service', command: () => this.visibleSidebarLeft = false },
      { label: 'Case Management', routerLink: 'case-management', command: () => this.visibleSidebarLeft = false },
      { label: 'Civil Paper Processing', routerLink: 'civil-paper-processing', command: () => this.visibleSidebarLeft = false },
      { label: 'Daily Activities Logging', routerLink: 'daily-activities-logging', command: () => this.visibleSidebarLeft = false },
      { label: 'Daily Analysis and Reports', routerLink: 'daily-analysis-reports', command: () => this.visibleSidebarLeft = false },
      { label: 'eTicketing', routerLink: 'e-ticketing', command: () => this.visibleSidebarLeft = false },
      { label: 'Processing', routerLink: 'processing', command: () => this.visibleSidebarLeft = false },
      { label: 'Property Room', routerLink: 'property-room', command: () => this.visibleSidebarLeft = false },
      { label: 'Warrants', routerLink: 'warrants', command: () => this.visibleSidebarLeft = false },
    ] },
    { label: 'Probation',  icon: 'fa-institution', items: [
      { label: 'Activities', items: [
        { label: 'Field Interviews', routerLink: 'field-interviews', command: () => this.visibleSidebarLeft = false },
        { label: 'Protection Orders', routerLink: 'protection-orders', command: () => this.visibleSidebarLeft = false },
        { label: 'BOLO', routerLink: 'bolo', command: () => this.visibleSidebarLeft = false },
        { label: 'Criminal Trespassing', routerLink: 'ct-list', command: () => this.visibleSidebarLeft = false },
        { label: 'Pawn', routerLink: 'pawn', command: () => this.visibleSidebarLeft = false },
        { label: 'Photo Linups', routerLink: 'photo-linups', command: () => this.visibleSidebarLeft = false },
        { label: 'Master Name', routerLink: 'master-name', command: () => this.visibleSidebarLeft = false }
      ] },
      { label: 'Case Management', routerLink: 'case-management', command: () => this.visibleSidebarLeft = false },
      { label: 'Data Analysis and Reports', routerLink: 'data-analysis-reports', command: () => this.visibleSidebarLeft = false },
      { label: 'Processing', routerLink: 'processing', command: () => this.visibleSidebarLeft = false },
    ] },
    { label: 'Settings',  icon: 'pi pi-fw pi-question', routerLink: 'settings', command: () => this.visibleSidebarLeft = false },
  ];
}
