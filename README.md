# Design Patterns

Design Patterns are typical solutions to commonly occurring problems in software design. They are formalized best practices, blueprints that can be taken and customized to solve a particular design problem in your application. They  may be viewed as a structured approach to computer programming intermediate between the levels of a programming paradigm and a concrete algorithm.

The best way to use patterns is to load your brain with them and
then recognize places in your designs and existing applications where you can
apply them. Instead of code reuse, with patterns you get experience reuse.

## Categories

### Creational Patterns

Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code. They are composed of two dominant ideas: 1) encapsulating knowledge about which concrete classes the system uses; 2) hiding how instances of these concrete classes are created and combined.

- [ ] [**Abstract Factory**](/AbstractFactory/README.md) lets you produce families of related objects without specifying their concrete classes.
- [ ] [**Builder**](/Builder/README.md) allows you construct different types and representations of a complex object using the same construction code.
- [ ] [**Dependency Injection**](/DependencyInjection/README.md)
- [ ] [**Factory Method**](/FactoryMethod/README.md) provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- [ ] [**Lazy Initialization**](/LazyInitialization/README.md)
- [ ] [**Multiton**](/Multiton/README.md)
- [ ] [**Object Pool**](/ObjectPool/README.md)
- [ ] [**Prototype**](/Prototype/README.md)
- [ ] [**Resource Acquisition Is Initialization (RAII)**](/RAII/README.md)
- [ ] [**Singleton**](/Singleton/README.md)

### Structural Patterns

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

- [ ] [**Adapter**](/Adapter/README.md)
- [ ] [**Bridge**](/Bridge/README.md)
- [ ] [**Composite**](/Composite/README.md)
- [ ] [**Decorator**](/Decorator/README.md)
- [ ] [**Extension Object**](/ExtensionObject/README.md)
- [ ] [**Facade**](/Facade/README.md)
- [ ] [**Flyweight**](/Flyweight/README.md)
- [ ] [**Front Controller**](/FrontController/README.md)
- [ ] [**Marker**](/Marker/README.md)
- [ ] [**Module**](/Module/README.md)
- [ ] [**Proxy**](/Proxy/README.md)
- [ ] [**Twin**](/Twin/README.md)

### Behavioral Patterns

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

- [ ] [**Blackboard**](/Blackboard/README.md)
- [ ] [**Chain Of Responsibility**](/ChainOfResponsibility/README.md)
- [ ] [**Command**](/Command/README.md)
- [ ] [**Interpreter**](/Interpreter/README.md)
- [ ] [**Iterator**](/Iterator/README.md)
- [ ] [**Mediator**](/Mediator/README.md)
- [ ] [**Memento**](/Memento/README.md)
- [ ] [**Null Object**](/NullObject/README.md)
- [ ] [**Observer**](/Observer/README.md)
- [ ] [**Servant**](/Servant/README.md)
- [ ] [**Specification**](/Specification/README.md)
- [ ] [**State**](/State/README.md)
- [ ] [**Strategy**](/Strategy/README.md)
- [ ] [**Template Method**](/TemplateMethod/README.md)
- [ ] [**Visitor**](/Visitor/README.md)

*Checked [x] means that the documentation is complete*.

## Documentation

The documentation for a design pattern describes the context in which the pattern is used, the forces within the context that the pattern seeks to resolve, and the suggested solution. There is no single, standard format for documenting design patterns. Rather, a variety of different formats have been used by different pattern authors. However, according to Martin Fowler, certain pattern forms have become more well-known than others, and consequently become common starting points for new pattern-writing efforts. One example of a commonly used documentation format is the one used by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides ("Gang of Four") in their book [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns). It contains the following sections:

- **Pattern Name and Classification**: A descriptive and unique name that helps in identifying and referring to the pattern.
- **Intent**: A description of the goal behind the pattern and the reason for using it.
- **Also Known As**: Other names for the pattern.
- **Motivation (Forces)**: A scenario consisting of a problem and a context in which this pattern can be used.
- **Applicability**: Situations in which this pattern is usable; the context for the pattern.
- **Structure**: A graphical representation of the pattern. Class diagrams and Interaction diagrams may be used for this purpose.
- **Participants**: A listing of the classes and objects used in the pattern and their roles in the design.
- **Collaboration**: A description of how classes and objects used in the pattern interact with each other.
- **Consequences**: A description of the results, side effects, and trade offs caused by using the pattern.
- **Implementation**: A description of an implementation of the pattern; the solution part of the pattern.
- **Sample Code**: An illustration of how the pattern can be used in a programming language.
- **Known Uses**: Examples of real usages of the pattern.
- **Related Patterns**: Other patterns that have some relationship with the pattern; discussion of the differences between the pattern and similar patterns.
