import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/global';
import { MustMatchValidator } from 'src/app/Validations/validations.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;
  registrationForm: FormGroup;
  strMsg: string;

  @ViewChild('tabset') elname: any;

  constructor(private _authService: AuthService,
    private _dataService: DataService, private _fb: FormBuilder, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.strMsg = "";
    this._authService.logout();
    this.createLoginForm();
    this.createRegistrationForm();
  }

  createLoginForm() {
    this.loginForm = this._fb.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createRegistrationForm() {
    this.registrationForm = this._fb.group({
      Id: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userTypeId: [1],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      loginId: ['', Validators.required]
    },
      {
        validators: MustMatchValidator('password', 'confirmPassword')
      }
    );
  }

  get f() {
    return this.registrationForm.controls;
  }

  onLogin() {
    if (this.loginForm.valid) {
      this._dataService.post(Global.BASE_API_PATH + "user/login", this.loginForm.value).subscribe(isValid => {
        if (isValid) {
          this._authService.login(isValid);
          this.strMsg = this._authService.getMessage();
          if (this.strMsg != "") {
            this._toastr.error(this.strMsg, "Login");
          }
        } else {
          this._toastr.error("Invalid loginId and Password !!", "Login");
        }
        this.reset();
      });
    } else {
      this._toastr.error("Invalid loginId and Password !!", "Login");
    }
  }

  reset() {
    this.loginForm.controls['loginId'].setValue("");
    this.loginForm.controls['password'].setValue("");
  }

  onRegistration(formData: any) {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    this._dataService.post(Global.BASE_API_PATH + "user", formData.value).subscribe(res => {

      if (res) {
        this._toastr.success("Account has been created successfully !!", "User Master");
        this.elname.select('logintab');
      } else {
        this._toastr.error(res.errors[0], "User Master");
      }
    });
  }
}
