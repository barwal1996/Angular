class Employee{
	empCode: number;
	empName: string;
	
	constructor(empcode:number,name:string)
{
	this.empCode=empcode;
	this.empName=name
}	
	displayName():void{
	console.log("Name = " + this.empName + ",Employee code = "+ this.empCode);
}
}
let emp = new Employee(100,"Star");
emp.displayName();
