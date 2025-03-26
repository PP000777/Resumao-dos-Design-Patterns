# Padrões de Projeto - Adapter, Decorator, Chain of Responsibility e Iterator

Este repositório contém exemplos práticos dos padrões de projeto **Adapter**, **Decorator**, **Chain of Responsibility** e **Iterator** em **JavaScript**.

---

## **Padrões Estruturais**

### **Adapter (Adaptador)**
Permite que classes com interfaces incompatíveis trabalhem juntas.

**Exemplo**: Um sistema antigo retorna temperaturas em Fahrenheit, mas precisamos de Celsius.

📌 **Explicação**:
1. Criamos `FahrenheitSensor`, que retorna temperatura em Fahrenheit.
2. Criamos `CelsiusAdapter`, que converte Fahrenheit para Celsius.
3. Usamos `CelsiusAdapter` para obter a temperatura convertida.

Código no arquivo [`adapter.js`](adapter.js).

---

### **Decorator (Decorador)**
Permite adicionar funcionalidades a um objeto sem modificar sua estrutura original.

**Exemplo**: Um sistema de café onde podemos adicionar opções extras como leite e chocolate.

📌 **Explicação**:
1. Criamos `Coffee`, a classe base do café.
2. Criamos `CoffeeDecorator`, que serve de base para os decoradores.
3. Criamos `Milk` e `Chocolate`, que adicionam preços extras dinamicamente.

Código no arquivo [`decorator.js`](decorator.js).

---

## **Padrões Comportamentais**

### **Chain of Responsibility (Cadeia de Responsabilidade)**
Permite que um pedido seja processado por uma cadeia de manipuladores.

**Exemplo**: Um sistema de suporte técnico onde a solicitação passa por diferentes níveis até ser resolvida.

📌 **Explicação**:
1. Criamos `Handler`, a classe base da cadeia de suporte.
2. Criamos `LevelOneSupport`, `LevelTwoSupport` e `LevelThreeSupport`, cada um resolvendo um tipo de problema.
3. Configuramos a cadeia conectando os handlers.
4. Chamamos `handle(request)`, e o pedido percorre os handlers até encontrar uma solução.

Código no arquivo [`CoR.js`](CoR.js).

---

### **Iterator (Iterador)**
Fornece uma maneira de percorrer elementos de uma coleção sem expor sua estrutura interna.

**Exemplo**: Criamos um iterador personalizado para uma coleção de nomes.

📌 **Explicação**:
1. Criamos `NameIterator`, que recebe uma lista de nomes.
2. `hasNext()` verifica se ainda há elementos na lista.
3. `next()` retorna o próximo nome e avança o índice.
4. Usamos um `while` para iterar pelos elementos sem expor a estrutura interna.

Código no arquivo [`iterator.js`](iterator.js).

---

## 📂 Estrutura do Repositório
