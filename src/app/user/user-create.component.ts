import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "./user.service";

@Component({
  templateUrl: 'app/user/user-create.component.html',
  styleUrls: ['app/user/user-create.component.css']
})

export class UserCreateComponent implements OnInit {
  pageTitle: string = "Create User";
  user = new User();
  userForm: FormGroup;
  errorMessage:string;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _userService:UserService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onReturnLogin() {
    this._router.navigate(['/login']);
  }

  onSubmit() {

    console.log(this.userForm.value);
    this._userService.createUser(this.userForm.value).subscribe(
      response => {
        console.log(response);

        if (response === true) {
          this._router.navigate(['/homepage']);

        } else {
          console.log("Error pe..");
        }

      },
      error => this.errorMessage = <any>error
    );



  }

  buildForm(): void {
    this.userForm = this._formBuilder.group({
      'name': [this.user.name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ],
      ],
      'email': [this.user.email,
        [
          Validators.required,
          Validators.minLength(6),
          this.emailValidation
        ]
      ],
      'password': [this.user.password,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15)
        ]
      ]
    });

    this.userForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }

    const form = this.userForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'email': '',
    'password': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
      'maxlength': 'Name cannot be more than 50 characters long.'
    },
    'email': {
      'required': 'Email is required.',
      'minlength': 'Email must be at least 6 characters long.',
      'invalidEmail': 'Email invalid.',
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 8 characters long.',
      'maxlength': 'Password cannot be more than 15 characters long.'
    }
  };

  emailValidation(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^(([^<>()\[\]\\.,;/:\s@"]+(\.[^<>()\[\]\\./,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return {invalidEmail: true};
    }
  }

}
