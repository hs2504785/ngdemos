export interface TodoInterface {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}

export function sort(a: TodoInterface, b: TodoInterface) {
  return a.title.localeCompare(b.title);
}
