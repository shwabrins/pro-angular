export class Model {
    user;
    items;

    constructor() {
        this.user = 'Pichu';
        this.items = [
            new TodoItem('Buy mochi', false),
            new TodoItem('Chmock Pechi', true),
            new TodoItem('Poock poock', false)
        ];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
