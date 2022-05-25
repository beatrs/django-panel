import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http: HttpClient) { }

  // * Departments API methods

  getAllDepartments() : Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDepartment(department:any) {
    return this.http.post(this.APIUrl + '/department/', department);
  } 

  updateDepartment(department:any) {
    return this.http.put(this.APIUrl + '/department/', department);
  }

  deleteDepartment(id:any) {
    return this.http.delete(this.APIUrl + `/department/${id}`);
  }

  // * Employees API methods

  getAllEmployees() : Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(employee:any) {
    return this.http.post(this.APIUrl + '/employee/', employee);
  }

  updateEmployee(employee:any) {
    return this.http.put(this.APIUrl + '/employee/', employee);
  }

  deleteEmployee(employee:any) {
    return this.http.delete(this.APIUrl + '/employee/', employee);
  }


}
