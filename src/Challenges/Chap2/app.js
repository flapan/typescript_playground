var TodoItemsEnum;
(function (TodoItemsEnum) {
    TodoItemsEnum["Todo"] = "todo";
    TodoItemsEnum["InProgress"] = "in-progress";
    TodoItemsEnum["Done"] = "done";
})(TodoItemsEnum || (TodoItemsEnum = {}));
var todoItems = [
    { id: 1, title: "Learn HTML", status: TodoItemsEnum.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoItemsEnum.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoItemsEnum.Todo },
];
function addTodoItem(todo) {
    var id = getNextId(todoItems);
    var newTodo = {
        id: id,
        title: todo,
        status: TodoItemsEnum.Todo,
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce(function (max, x) { return x.id > max ? x.id : max; }, 0) + 1;
}
var newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
