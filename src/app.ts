class Department {
  // private name: string;
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const itDep = new ITDepartment("d1", ["max"]);
console.log(itDep);
console.log(itDep.admins);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "test lastest report";

accounting.addReport("Somthinge went wrong...");
accounting.mostRecentReport = "123";
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("ryan");
accounting.printEmployeeInformation();
// const accounting = new Department("1", "Accounting");
// accounting.describe();

// accounting.addEmployee("max");
// accounting.addEmployee("manuel");

// // accounting.employees[2] = 'anna'

// accounting.printEmployeeInformation();
