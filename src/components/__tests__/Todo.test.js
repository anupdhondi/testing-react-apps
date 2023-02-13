import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../Todo';

afterEach(() => {
  cleanup();
});

test('should render completed todo', () => {
  const todo = {
    id: 1,
    title: 'Maths',
    completed: true,
  };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Maths');
});

test('should render not completed todo', () => {
  const todo = {
    id: 2,
    title: 'Physics',
    completed: false,
  };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Physics');
  expect(todoElement).not.toContainHTML('<strike>');
});
