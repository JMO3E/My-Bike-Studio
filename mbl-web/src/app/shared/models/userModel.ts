export class User {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;

  Constructor(id: number, firstName: string, lastName: string, email: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
