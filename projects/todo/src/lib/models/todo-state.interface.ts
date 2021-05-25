import { TodoInterface } from './todo.interface';

export interface TodoStateInterface {
  data: TodoInterface[];
  isLoading: boolean;
  error: null;
  loaded: boolean;
}
