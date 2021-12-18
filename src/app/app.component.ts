import { Component } from '@angular/core';
import { Employee } from './Employee';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF-App';

  EmployeeObj:Employee = new Employee('',0,'',[],0,'');

  IT:string[]=['Java','Python','Angular'];
  Marketing:string[]=['Communication','Selling'];
  filteredskills:string[]=[];
  fillskills:string[]=[];
  delindex:number=-1;
  count:number=0;
  isvalid:boolean=true;

  onSubmit(Employeeform:NgForm)
  {
    this.EmployeeObj.empName=Employeeform.value.name;
    this.EmployeeObj.empSalary=Employeeform.value.salary;
    this.EmployeeObj.empDepartment=Employeeform.value.department;
    this.EmployeeObj.empSkills=this.fillskills;
    this.EmployeeObj.empExperience=Employeeform.value.experience;
    this.EmployeeObj.empAssignedtask=Employeeform.value.assignedtask;

    console.log(this.EmployeeObj);

  }

  filterskills(empDept:string)
  {
    console.log(empDept);
    if(empDept=='IT')
    {
      this.filteredskills=this.IT;
    }
    if(empDept=='Marketing')
    {
      this.filteredskills=this.Marketing;
    }


  }
  filledskills(skill:string)
  {
    

    if(this.fillskills.includes(skill))
      {

      this.delindex=this.fillskills.indexOf(skill);
      this.fillskills.splice(this.delindex,1);
      this.count--;
      console.log(this.fillskills);
      console.log(this.count);
      }
    else{
    this.fillskills.push(skill);
    this.count++;
    console.log(this.fillskills);
    console.log(this.count);
    }

  }

  checkexperience(experi:number , esal:number)
  {
    this.isvalid=true;
    if(experi>3)
    {
      if(this.count<2)
      {
        this.isvalid=false;
        console.log(this.isvalid);
      }
    }

    if(experi<2)
    {
      if(esal>50000)
      {
        this.isvalid=false;
        console.log(this.isvalid);

      }
    }
  }

}


