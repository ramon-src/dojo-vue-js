import { shallowMount } from "@vue/test-utils";
import TodoList from '@/components/TodoList'

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = shallowMount(TodoList);
  });

  it('first test', () => {
    expect(todoList.vm.newTodo).toBe('')
  })
})
