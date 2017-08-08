import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
  testForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.testForm);
    //this.myForm.reset();
  };

  ngOnInit() {
    this.testForm = this.formBuilder.group({
    firstname: [null]
    //this.myForm = new FormGroup({
    //firstName: new FormControl(null, Validators.required)
    /*
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
    */
});
}}


/*
//Max:
ngOnInit() {
  this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
  });
}
*/
/*
//Me: original
ngOnInit() {
  this.myForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    //email: new FormControl(null, [
      //Validators.required//,
      //Validators.pattern("/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/")
    //]),
    password: new FormControl(null, Validators.required)
  });
}
*/
