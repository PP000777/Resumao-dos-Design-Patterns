class Coffee {
    cost() {
        return 5;
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost();
    }
}

class Milk extends CoffeeDecorator {
    cost() {
        return super.cost() + 2;
    }
}

class Chocolate extends CoffeeDecorator {
    cost() {
        return super.cost() + 3;
    }
}

let coffee = new Coffee();
console.log(coffee.cost());

coffee = new Milk(coffee);
console.log(coffee.cost());

coffee = new Chocolate(coffee);
console.log(coffee.cost());
