import { Component, OnInit, Input } from '@angular/core';
import { ManageDataService } from 'src/app/shared/manage-data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  @Input() employee: any;
  @Input() isNew: boolean = false;
  @Input() ModalTitle: any;
  EmployeeID:string = '';
  EmployeeName:string = '';
  EmpDeptName: string = '';
  EmpDateHired: string = '';
  EmpPhotoURL: string = '';
  // @Output() closeRef : EventEmitter<any> = new EventEmitter();

  constructor(
    private dataService: ManageDataService,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.employee){
      this.EmployeeName = this.employee.name;
      this.EmployeeID = this.employee.id;
      this.EmpDeptName = this.employee.department;
      this.EmpDateHired = this.employee.date_hired;
    }
  }

  closeModal(msg:string='') {
    this.activeModal.close(msg);
  }


  addEmployee() {
    const newEmp = {
      id: this.EmployeeID,
      name: this.EmployeeName
    };
    this.dataService.addEmployee(newEmp)
      .subscribe(response => {
        if (response)
          this.closeModal('Employee successfully added!')
      });
  }

  editEmployee(updatedEmp:any) {
    updatedEmp.id = this.employee.id;
    this.dataService.updateEmployee(updatedEmp)
      .subscribe((response:any) => {
        if (response) {
          this.closeModal('Employee successfully updated!');
        }
      });

  }

}
