class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};