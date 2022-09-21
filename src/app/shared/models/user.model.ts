export class UserModel {
  id?: number;
  firstName!: string;
  lastName!: string;
  username!: string;
  password!: string;
  contactPreference!: string;
  phone?: string;
  email?: string;
  roles?: string[];
}
