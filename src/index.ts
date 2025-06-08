abstract class User {
    constructor(
        protected firstName : string,
        protected lastName : string,
        protected nickName : string,
    ) {}

    abstract getNickName():void

    // private getFullName(){
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickName);
    }
}

const nico = new Player("nico", "las", "nomad");
// const nico = new User("nico", "las", "nomad");


// nico.nickName;

nico.getFullName;
nico.getNickName;