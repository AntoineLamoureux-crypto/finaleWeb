import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  user: User;

  updateUserForm: FormGroup;

  validMessage: String = "";
  

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.findByID(this.id).subscribe(res =>{
      this.user = res;
    });

    this.updateUserForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(8)]),
      password: new FormControl('', Validators.required),
      emailOffers: new FormControl('', Validators.required),
      interfaceStyle: new FormControl('', Validators.required),
      subscriptionType: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required)
  
    });
  }

  public updateUser() {
    this.service.update(this.id, this.updateUserForm.value).subscribe(() =>{
      this.router.navigateByUrl('crud');
    }, (err) =>{
      console.log(err);
      this.validMessage = "Veuillez remplir les champs correctement !";
    });
  }

  get form() {
    return this.updateUserForm.controls;
  }
}
