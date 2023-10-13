class User{
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
     static createId(){
        return `123`
    }
}

const mukul = new User("mukul")
// console.log(mukul.createId()); 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId());