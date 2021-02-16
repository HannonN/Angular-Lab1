import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      completed: true,
      task: 'Mow the Lawn',
    },
    {
      completed: true,
      task: 'Feed the Cat',
    },
    {
      completed: false,
      task: 'Walk the Dog',
    },
  ];
  searchTerm: string = '';
  // data above**********
  constructor() {}

  ngOnInit(): void {}
  // methods below*******

  addTodo = (form: NgForm, anArrayOfTasks: Todo[]): void => {
    console.log(form);
    console.log(form.form.value.task);
    let newTask: Todo = {
      task: form.form.value.task,
      completed: form.form.value.completed === 'false',
    };
    anArrayOfTasks.push(newTask);
  };

  deleteTodo = (index: number): void => {
    this.todos.splice(index, 1);
  };

  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.form.value.task;
  };

  filterTodos = (term: string): Todo[] => {
    return this.todos.filter((todo) => {
      return todo.task.includes(term);
    });
  };
}
