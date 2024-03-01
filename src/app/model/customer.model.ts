export class Customer
{
    name : string;
    firstname : string;
    adress : string;
    email : string;
    phone : string;

    constructor(name:string , firstname:string , adress:string, email:string , phone:string)
    {
        this.name = name;
        this.firstname = firstname;
        this.adress = adress;
        this.email = email;
        this.phone = phone;
    }
};