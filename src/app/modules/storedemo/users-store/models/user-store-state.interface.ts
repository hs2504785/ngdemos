import { UserStoreInterface } from './user-store-interface';

export interface UserStoreStateInterface {
  data: UserStoreInterface[];
  isLoading: boolean;
  error: null;
  loaded: boolean;
}
