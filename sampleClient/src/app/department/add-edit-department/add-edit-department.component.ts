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
  @Input() isNew: boolean = false;
  @Input() ModalTitle: any;
  DepartmentID:string = '';
  DepartmentName:string = '';
  // @Output() closeRef : EventEmitter<any> = new EventEmitter();

  constructor(
    private dataService: ManageDataService,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.department){
      this.DepartmentName = this.department.name;
      this.DepartmentID = this.department.id;
    }
  }

  closeModal(msg:string='') {
    this.activeModal.close(msg);
  }


  addDepartment() {
    const newDept = {
      id: this.DepartmentID,
      name: this.DepartmentName
    };
    this.dataService.addDepartment(newDept)
      .subscribe(response => {
        if (response)
          this.closeModal('Department successfully added!')
      });
  }

  editDepartment(updatedDept:any) {
    updatedDept.id = this.department.id;
    this.dataService.updateDepartment(updatedDept)
      .subscribe(response => {
        if (response) {
          this.closeModal('Department successfully updated!');
        }
      });

  }

}
