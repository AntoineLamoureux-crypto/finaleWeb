import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  id: number;
  user: User;

  afficherUserForm: FormGroup;

  validMessage: String = "";
  

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.findByID(this.id).subscribe(res =>{
      this.user = res;
    });

    this.afficherUserForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(8)]),
      password: new FormControl('', Validators.required),
      emailOffers: new FormControl('', Validators.required),
      interfaceStyle: new FormControl('', Validators.required),
      subscriptionType: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required)
  
    });
  }

  get form() {
    return this.afficherUserForm.controls;
  }
}
