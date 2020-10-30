import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: [],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public title: string;
  titleSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.titleSubs$ = this.getRouteArguments().subscribe(
      ({ title }) => (this.title = title)
    );
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  private getRouteArguments() {
    return this.router.events.pipe(
      filter((event: ActivationEnd) => event.snapshot.firstChild == null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

  ngOnInit(): void {}
}
