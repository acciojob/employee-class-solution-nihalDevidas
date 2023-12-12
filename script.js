function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.giveRaise = function(amount) {
  this.salary += amount;
}

function Manager(name, salary, department) {
  Employee.call(this, name, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.giveRaise = function(amount) {
  Employee.prototype.giveRaise.call(this, amount);
  console.log(`New salary for ${this.name} in ${this.department}: ${this.salary}`);
}
