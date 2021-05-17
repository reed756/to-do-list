class createTodo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    toggle() {
        if (this.priority === 'red') {
            return this.priority = 'orange';
        } else if (this.priority === 'orange') {
            return this.priority = 'green';
        } else {return this.priority = 'red';}
    }
} 

export { createTodo }

// class Book {
//     constructor(title, author, number, read) {
//         this.title = title;
//         this.author = author;
//         this.number = number;
//         this.read = read;
//     }
//     toggle() {
//         if (this.read !== 'read') {
//             return this.read = 'read';
//         } else {
//             return this.read = 'not read';
//         }
//     }
// }

// = (title, description, dueDate, priority) => {
//     return { title, description, dueDate, priority };
// }
