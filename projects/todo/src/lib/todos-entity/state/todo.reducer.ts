import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { sort, TodoInterface } from '../../models/todo.interface';
import { loadTodosSuccess } from '../../state/todo.actions';

export const entityTodoesFeatureKey = 'entityTodos';

export interface TodoStateInterface extends EntityState<TodoInterface> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TodoInterface> =
  createEntityAdapter<TodoInterface>({
    sortComparer: sort,
  });

export const initialState: TodoStateInterface = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  // on(TodoActions.addTodo, (state, action) =>
  //   adapter.addOne(action.todo, state),
  // ),
  // on(TodoActions.upsertTodo, (state, action) =>
  //   adapter.upsertOne(action.todo, state),
  // ),
  // on(TodoActions.addTodos, (state, action) =>
  //   adapter.addMany(action.todos, state),
  // ),
  // on(TodoActions.upsertTodos, (state, action) =>
  //   adapter.upsertMany(action.todos, state),
  // ),
  // on(TodoActions.updateTodo, (state, action) =>
  //   adapter.updateOne(action.todo, state),
  // ),
  // on(TodoActions.updateTodos, (state, action) =>
  //   adapter.updateMany(action.todos, state),
  // ),
  // on(TodoActions.deleteTodo, (state, action) =>
  //   adapter.removeOne(action.id, state),
  // ),
  // on(TodoActions.deleteTodos, (state, action) =>
  //   adapter.removeMany(action.ids, state),
  // ),
  on(loadTodosSuccess, (state, action) => adapter.setAll(action.todos, state)),
  // on(TodoActions.clearTodos, state => adapter.removeAll(state)),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export function entityTodoReducer(
  state: TodoStateInterface | undefined,
  action: Action,
) {
  return reducer(state, action);
}
