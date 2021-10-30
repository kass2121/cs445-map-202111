/**
 * app.js
 */
interface ICourse {
    code: number;
    name: string;
    toString(): string;
}

class Course {
    location: string;
    constructor(location: string) {
        this.location = location;
    }
}

class MAP extends Course implements ICourse {
    code: number;
    name: string;
    constructor(code: number, name: string, location: string) {
        super(location);
        this.code = code;
        this.name = name;
    }
    toString() : string {
        return `${this.code} ${this.name}`;
    }
}

let map: ICourse = new MAP(445, "Modern...", "V28"); // Polymorphism
console.log(map.toString);