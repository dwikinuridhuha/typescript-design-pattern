class User {
    public name: string = "";
    public username: string = "";
    public password: string = "";

    public getDetail(): void {
        console.log(`${this.name} - ${this.username}`);
    }
}

class BuilderUser {
    private user: User;

    constructor() {
        this.user = new User();
    }

    public setName(name: string) {
        this.user.name = name;
        return this;
    }

    public setUsername(username: string) {
        this.user.username = username;
        return this;
    }

    public setPassword(password: string) {
        this.user.password = password;
        return this;
    }

    public getDetailUser() {
        return this.user.getDetail();
    }
    public getBuild() {
        return this.user;
    }
}

const userObjt = new BuilderUser();
userObjt.setName("okokok");
userObjt.setUsername("sdfsadfd");
userObjt.getBuild();

console.log(userObjt);
