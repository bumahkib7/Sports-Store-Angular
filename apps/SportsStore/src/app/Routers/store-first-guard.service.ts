import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {StoreComponent} from "../models/store/store.component";

@Injectable()
export class StoreFirstGuard {

  private firstNavigation = true;


  constructor(private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (!this.firstNavigation) {
    } else {
      this.firstNavigation = false;
      if (route.component != StoreComponent) {
        this.router.navigateByUrl("/").then(r => console.log(r))
        return false;
      }
    }
    return true;
  }
}
