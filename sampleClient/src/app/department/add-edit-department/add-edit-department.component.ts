import { Component, Input, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/shared/manage-data.service';
import { Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

  @Input() department: any;
  DepartmentID:string = '';
  DepartmentName:string = '';
  @Output() closeRef : EventEmitter<any> = new EventEmitter();

  constructor(
    private dataService: ManageDataService,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.DepartmentID = this.department.id;
    this.DepartmentName = this.department.name;
    console.log(this.department.name);
  }

  closeModal(msg:string) {
    this.activeModal.close(msg);
  }


  addDepartment() {
    const newDept = {
      id: this.DepartmentID,
      name: this.DepartmentName
    };

    // this.dataService.addDepartment(newDept).subscribe(response => {
    //   if (response) {
    //     alert('Department successfully added!');
    //   }
    // });
    // this.closeModal();
    this.dataService.addDepartment(newDept)
      .subscribe(response => {
        if (response)
          this.closeModal('Department successfully added!')
      });
  }

  editDepartment() {
    const update = {
      id: this.DepartmentID,
      name: this.DepartmentName
    };

    this.dataService.updateDepartment(update).subscribe(response => {
      if (response) {
        alert('Department successfully updated!');
      }
    })

  }

}
