import * as fromTodo from './todo.reducer';
import { selectTodoStateInterface } from './todo.selectors';

describe('Todo Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTodoStateInterface({
      [fromTodo.todoFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
