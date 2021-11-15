import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated: any;
  searchValue: any;
  searchResults: any;
  imgSrc = 'https://image.tmdb.org/t/p/w500/';
  userData: any;

  dataLoaded: boolean = false;

  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router, private _ApiService: ApiService) { }

  ngOnInit(): void {
    this._AuthenticationService.isAuthenticated.subscribe((authenticationValue) => {
      this.authenticated = authenticationValue
    });
    window.addEventListener('click', () => {
      document.getElementById('searchResults')?.classList.add('d-none');
    });
    document.querySelector('.search-container')?.addEventListener('click', function (e: Event) {
      e.stopImmediatePropagation();
    })
    this._AuthenticationService.userData.subscribe(data => {
      this.userData = data;
    });
  }

  logout() {
    this._AuthenticationService.logout();
    this._Router.navigate(['/login']);
  }

  search(e: any) {
    this.searchValue = e.target.value;
    this.dataLoaded = false;
    this._ApiService.getSearchResults(this.searchValue, '1').subscribe((response) => {
      this.searchResults = response.results.slice(0, 4);
      this.dataLoaded = true;
    });
    document.getElementById('searchResults')?.classList.remove('d-none');
  }

}
