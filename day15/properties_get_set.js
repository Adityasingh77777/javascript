function User(email,password){
    this._email=email
    this._password=password
// pehla ka tarika
    Object.defineProperty(this,'email',{
        get :function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this.email=value
        }
    })

    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this.password=value
        }
    })
}

const chai=new User("chaichai@gmail.com","hello")

console.log(chai.email);
