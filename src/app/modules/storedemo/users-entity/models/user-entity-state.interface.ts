import { UserEntityInterface } from './user-entity-interface';

export interface UserEntityStateInterface {
  data: UserEntityInterface[];
  isLoading: boolean;
  error: null;
  loaded: boolean;
}
