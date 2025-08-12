// getter setter and stack overflow 
class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password}Aditya`
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}

const Aditya = new User("Aditya@gmail.com","abc")
console.log(Aditya.password);
console.log(Aditya.email);