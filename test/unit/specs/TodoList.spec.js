import { shallowMount } from "@vue/test-utils";
import TodoList from '@/components/TodoList'

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = shallowMount(TodoList);
  });

  it('first test', () => {
    todoList.vm.newTodo = 'arroz'
    expect(todoList.vm.newTodo).toBe('arroz')
  })
})
