function employees(arr) {

    class Employee {
        constructor(name, num) {
            this.name = name;
            this.num = num;
        }
        print(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.num}`);
        }
    }
    arr.forEach(person => {
        let currNameLen = person.length;
        let currentEmployee = new Employee(person, currNameLen)
        currentEmployee.print();
    });    
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )