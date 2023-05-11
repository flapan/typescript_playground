interface TodoItem {
    id: number;
    title: string;
    status: TodoItemsEnum;
    completedOn?: Date;
}

enum TodoItemsEnum {
    Todo = "todo",
    InProgress = "in-progress",
    Done = "done"
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: TodoItemsEnum.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoItemsEnum.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoItemsEnum.Todo },
]

function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id: id,
        title: todo,
        status: TodoItemsEnum.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id: number}>(items: T[]) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))