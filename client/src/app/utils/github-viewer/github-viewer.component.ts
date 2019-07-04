import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'nlg-github-viewer',
  templateUrl: './github-viewer.component.html',
  styleUrls: ['./github-viewer.component.scss']
})
export class GithubViewerComponent implements OnInit {

  public gitUser$;
  public hide = true;
  public noUserFound: {er404: string};

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.max(12)
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  searchGitUser(gitUser) {
    this.http.get(`https://api.github.com/users/${gitUser}`).subscribe(res => {
      this.gitUser$ = res;
    }, err => {
      this.noUserFound = {er404: 'User Not Found'};
      this.emailFormControl.setErrors(this.noUserFound);
    });
  }

}
