import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lead } from 'src/app/models/lead';
import { Source } from 'src/app/models/source';
import { Task } from 'src/app/models/task';
import { Unit } from 'src/app/models/unit';
import { User } from 'src/app/models/user';
import { LeadsService } from 'src/app/services/leads.service';
import { SourcesService } from 'src/app/services/sources.service';
import { TasksService } from 'src/app/services/tasks.service';
import { UnitsService } from 'src/app/services/units.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  units: Unit[];
  sources: Source[];
  users: User[];

  isLead: boolean;
  addSaleCount: number = 0;

  lead : Lead;
  task : Task;

  constructor(

    private unitsService: UnitsService,
    private sourcesService: SourcesService,
    private leadsService: LeadsService,
    private tasksService: TasksService,
    private usersService: UsersService,
    private toastService: MatSnackBar,

  ) {
      this.lead = new Lead();
      this.task = new Task();
   }

  ngOnInit(): void {
    this.getUnits();
    this.getSources();
    this.getUsers();

    this.isLead = true;

    this.form = new FormGroup({
      
      linkPhone : new FormGroup({
        link: new FormControl(""),
        phone: new FormControl(""),
      }, this.RequireLinkPhone()),

      source_id: new FormControl("", Validators.required),
      unit_id: new FormControl("", Validators.required),
      
      is_processed: new FormControl("", Validators.required),
      is_express_delivery: new FormControl("", Validators.required),
      is_add_sale: new FormControl("", Validators.required),

      text : new FormControl(""),
      responsible_id: new FormControl(""),
      is_lead : new FormControl(true)

    });
    
    this.onChangesIsLead();
  }
  
  onChangesIsLead() {
    throw new Error('Method not implemented.');
  }

  RequireLinkPhone(): import("@angular/forms").ValidatorFn | import("@angular/forms").ValidatorFn[] | import("@angular/forms").AbstractControlOptions {
    
    return (group : FormGroup) : ValidationErrors => {
      
      const link = group.controls['link'];
      const phone = group.controls['phone'];

      if((!link.value && !phone.value) || (link.value && phone.value)) {
          link.setErrors({RequireLinkPhone : true});
          phone.setErrors({RequireLinkPhone : true});
          return {RequireLinkPhone : true}
      }
      else {
        link.setErrors(null);
        phone.setErrors(null);
        return null;
      }
    }

  }

  getUsers() {
    this.usersService.getUsers().subscribe((data: User[])=>{
      this.users = data;
    });
  }
  getSources() {
    this.sourcesService.getSources().subscribe((data: Source[])=>{
      this.sources = data;
    });
  }
  getUnits() {
    this.unitsService.getUnits().subscribe((data: Unit[])=>{
        this.units = data;
    });
  }

  get f() {return this.form.controls}

  onSubmit() {

  }

}
