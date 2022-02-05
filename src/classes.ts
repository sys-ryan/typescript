abstract class Department {
  static fiscalYear = 2020;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
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

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}

const employee1 = Department.createEmployee("max");
console.log(employee1, Department.fiscalYear);

const itDep = new ITDepartment("d1", ["max"]);
console.log(itDep);
console.log(itDep.admins);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "test lastest report";

accounting.addReport("Somthinge went wrong...");
accounting.mostRecentReport = "123";
console.log(accounting.mostRecentReport);
accounting.describe();
accounting.printReports();
accounting.addEmployee("ryan");
accounting.printEmployeeInformation();
itDep.describe();
// const accounting = new Department("1", "Accounting");
// accounting.describe();

// accounting.addEmployee("max");
// accounting.addEmployee("manuel");

// // accounting.employees[2] = 'anna'

// accounting.printEmployeeInformation();
