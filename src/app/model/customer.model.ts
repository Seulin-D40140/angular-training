export class Customer
{
    id : number;
    name : string;
    firstname : string;
    adress : string;
    email : string;
    phone : number;

    constructor(id:number , name:string , firstname:string , adress:string, email:string , phone:number)
    {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.adress = adress;
        this.email = email;
        this.phone = phone;
    }
};