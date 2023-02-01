export class Users {
    public Id: number;
    public nom: string;
    public pwd:string;
    public email:string;
    public prenom:string;
    
    constructor(Id:number,nom: string,prenom: string,pwd:string,email:string) {
    this.Id = Id;
    this.nom = nom;
    this.prenom=prenom;
    this.pwd = pwd;
    this.email = email;
    
    }
    }