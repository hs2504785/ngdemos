import { TodoInterface } from './todo.interface';

export interface TodoState {
  data: TodoInterface[];
  isLoading: boolean;
  error: null;
  loaded: boolean;
}
