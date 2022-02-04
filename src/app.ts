class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const itDep = new ITDepartment("d1", ["max"]);
console.log(itDep);
console.log(itDep.admins);

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Somthinge went wrong...");
accounting.printReports();
// const accounting = new Department("1", "Accounting");
// accounting.describe();

// accounting.addEmployee("max");
// accounting.addEmployee("manuel");

// // accounting.employees[2] = 'anna'

// accounting.printEmployeeInformation();
