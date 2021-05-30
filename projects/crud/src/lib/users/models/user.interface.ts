export interface UserInterface {
  id: number;
  name: string;
  username?: string;
  email: string;
  address: object;
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
