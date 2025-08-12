class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`)    
    }

        // static doesn't let give to inherit function
    static createId(){
            return `123`
        }
    }

const Aditya = new User("Aditya")
console.log(Aditya.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email

    }
}

const iphone= new Teacher("iphone","i@phone.com")
console.log(iphone.logMe());
console.log(iphone.createId());