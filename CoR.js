class Handler {
    setNext(handler) {
        this.next = handler;
        return handler;
    }

    handle(request) {
        if (this.next) {
            return this.next.handle(request);
        }
        return "Nenhum suporte disponível.";
    }
}

class LevelOneSupport extends Handler {
    handle(request) {
        if (request === "simples") {
            return "Suporte nível 1: Problema resolvido.";
        }
        return super.handle(request);
    }
}

class LevelTwoSupport extends Handler {
    handle(request) {
        if (request === "médio") {
            return "Suporte nível 2: Problema resolvido.";
        }
        return super.handle(request);
    }
}

class LevelThreeSupport extends Handler {
    handle(request) {
        if (request === "difícil") {
            return "Suporte nível 3: Problema resolvido.";
        }
        return super.handle(request);
    }
}

const level1 = new LevelOneSupport();
const level2 = new LevelTwoSupport();
const level3 = new LevelThreeSupport();

level1.setNext(level2).setNext(level3);

console.log(level1.handle("simples"));
console.log(level1.handle("médio"));
console.log(level1.handle("difícil"));
console.log(level1.handle("crítico"));
