export type User = {
  id?: string | number;
  name: string;
  email: string;
  role?: 'INTERN' | 'EMPLOYEE' | 'ADMIN';
};
