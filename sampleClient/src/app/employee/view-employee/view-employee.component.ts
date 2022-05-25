import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageDataService } from 'src/app/shared/manage-data.service';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  EmployeeList : any[] = [];
  ModalTitle: string = '';
  employee: any;


  constructor(
    private dataService: ManageDataService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.dataService.getAllEmployees().subscribe((data) => {
      this.EmployeeList = data;
    });
  } 

  addEmp() {
    const modalRef = this.modalService.open(AddEditEmployeeComponent, {centered: true});
    modalRef.componentInstance.ModalTitle = 'Add Employee';
    modalRef.componentInstance.isNew = true;
    modalRef.result.then((res) => {
      if (res !== '')
        alert(res);
     
      this.refreshEmployeeList();
    });
  }

  editEmp(selectedEmployee:any) {
    const modalRef = this.modalService.open(AddEditEmployeeComponent, {centered: true});
    modalRef.componentInstance.ModalTitle = 'Update Employee';
    modalRef.componentInstance.isNew = false;
    modalRef.componentInstance.employee = selectedEmployee;
    modalRef.result.then((res) => {
      if (res !== '')
        alert(res);

      this.refreshEmployeeList();
    });
  }

  // TODO: add modal for confirmation
  delete(selectedEmployee:any) {
    this.dataService.deleteDepartment(selectedEmployee).subscribe(response => {
      if (response)
        alert('Department successfully deleted');
    });
    this.EmployeeList = this.EmployeeList.filter((dept) => dept.id !== selectedEmployee)
  }

}
