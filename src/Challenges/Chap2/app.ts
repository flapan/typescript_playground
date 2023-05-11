const todoItems = [
    { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: "in-progress" },
    { id: 3, title: "Write the best app in the world", status: "todo" },
]

interface todoItem {
    id: number;
    title: string;
    status: todoItemsEnum;
    completedOn?: Date;
}

enum todoItemsEnum {
    Todo = "todo",
    InProgress = "in-progress",
    Done = "done"
}

function addTodoItem(todo: string): todoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id: id,
        title: todo,
        status: todoItemsEnum.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))