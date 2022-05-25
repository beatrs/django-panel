import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/shared/manage-data.service'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  DepartmentList : any[] = [];
  ModalTitle: string = '';
  ActivateAddEditComponent: boolean = false;
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
    this.add();
    const modalRef = this.modalService.open(content, { centered: true });
    
    modalRef.result.then((res) => console.log(res));
  }

  add() {
    console.log('button clicked');
    this.department = {
      id: 0,
      name: ""
    };

    this.ModalTitle = "Add Department";
    this.ActivateAddEditComponent = true;
  }

  edit(selectedDepartment:any) {
    this.department = selectedDepartment;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditComponent = true;
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

  close() {
    this.ActivateAddEditComponent = false;
    this.modalService.dismissAll();
    this.refreshDepartmentList();
    console.log("close function triggered");
  }


}
