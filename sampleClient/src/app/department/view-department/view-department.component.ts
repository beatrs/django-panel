import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/shared/manage-data.service'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditDepartmentComponent } from '../add-edit-department/add-edit-department.component';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  DepartmentList : any[] = [];
  ModalTitle: string = '';
  // ActivateAddEditComponent: boolean = false;
  department: any;


  constructor(
    private dataService: ManageDataService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshDepartmentList();
    // console.log(this.DepartmentList);
  }

  refreshDepartmentList() {
    this.dataService.getAllDepartments().subscribe((data) => {
      this.DepartmentList = data;
    });
  } 

  openVerticallyCentered(content:any) {
    // this.add();
    const modalRef = this.modalService.open(content, { centered: true });
    
    modalRef.result.then((res) => console.log(res));
  }

  addDept() {
    const modalRef = this.modalService.open(AddEditDepartmentComponent, {centered: true});
    modalRef.componentInstance.ModalTitle = 'Add Department';
    modalRef.componentInstance.isNew = true;
    modalRef.result.then((res) => {
      if (res !== '')
        alert(res);
     
      this.refreshDepartmentList();
    });
  }

  editDept(selectedDepartment:any) {
    const modalRef = this.modalService.open(AddEditDepartmentComponent, {centered: true});
    modalRef.componentInstance.ModalTitle = 'Edit Department';
    modalRef.componentInstance.isNew = false;
    modalRef.componentInstance.department = selectedDepartment;
    modalRef.result.then((res) => {
      if (res !== '')
        alert(res);

      this.refreshDepartmentList();
    });
  }

  // TODO: add modal for confirmation
  delete(selectedDepartment:any) {
    console.log(selectedDepartment);
    this.dataService.deleteDepartment(selectedDepartment).subscribe(response => {
      if (response)
        alert('Department successfully deleted');
    });
    this.DepartmentList = this.DepartmentList.filter((dept) => dept.id !== selectedDepartment)
  }

  // close() {
  //   this.modalService.dismissAll();
  //   this.refreshDepartmentList();
  //   console.log("close function triggered");
  // }


}
