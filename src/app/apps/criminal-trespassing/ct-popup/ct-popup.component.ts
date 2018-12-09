import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ct-popup',
  templateUrl: './ct-popup.component.html',
  styleUrls: ['./ct-popup.component.css']
})
export class CtPopupComponent implements OnInit, AfterViewInit, OnDestroy {
  _leftopened = false;

  _rightopened = false;

  params: any;

  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.params = params;
    });
  }

  ngAfterViewInit() {
    this.router.navigate(['ct-popup', {outlets: {'ct-popup': this.params['type']}}], { queryParams: this.params });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
