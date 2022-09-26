# OOP's in RUBY

## Encapsulation
> Encapsulation just means that all of the implementation details of the object being modeled are hidden and only the methods and properties required to use the object are exposed. 
 create setter and getter
 use `attr_accessor` to set both getter and setter
 use `attr_writer` to be able to change the attribute value only
 use `attr_reader` to be to read only the attribute value
 
 Ex : `attr_accessor :name`
      `attr_writer :name`
      `attr_reader :name`

### Abstraction
 > To make the code better we can leverage abstractions and instead of having a method using internals we have a public method that uses those same internals.
 > Data abstraction is just a fancy way of saying that we are going to model our data to look like it's real life equivalent. 
 
 Ex: 
 
 Don't
 ```ruby
 class Animal
  ...

  def speak(animal)
  if animal.type == "dog"
    "Woof, woof"
  elsif animal.type == "spider"
    "..."
  end
end

  ...
end
```

  Do
  ```ruby
  class Animal
  ...

  def speak
    if @type == "dog"
      "Woof, woof"
    elsif @type == "spider"
      "..."
    end
  end

  ...
  end
  ```
  
## Inheritance

> You can create other classes and inherit everything from the parent class , in this example we are creating an external file and creatinf inside a new class of dog which inherit from class Animal

 Ex:
 ```ruby
 require "./animal.rb"

 class Dog < Animal
  def initialize(color, name = "Unknown")
    super("dog", 4, name)
    @color = color
  end

  def bring_a_stick
    "Here is your stick: ---------"
  end
  end
```
  
## Polymorphism

> After inherit from attributes,function(methods) from the parent class this allow us to overwrite function from the parent class and modify them in the child class
> Where do they come up with these names? Latin of course! Polymorphism means many forms which aptly describes the ability of OOP languages to use the same identifier to cause different behavior.

 Ex:
 
 ```ruby
 class Dog < Animal
  ...

  def speak
    "Woof, woof"
  end
 end
```

