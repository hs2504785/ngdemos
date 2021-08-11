export interface UserCs {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserCsInterfaceState {
  users: UserCs[];
}
