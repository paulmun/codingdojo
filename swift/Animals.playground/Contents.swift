//: Playground - noun: a place where people can play

import UIKit

class Animal{
    var name: String
    var health = 100
    init(name: String){
        self.name = name
    }
    
    func displayHealth(){
        print(self.health)
    }
}

class Cat: Animal{
    override init(name: String){
        super.init(name: name)
        self.health = 150
    }
    
    func growl(){
        print("Rawr!")
    }
    
    func run(){
        self.health -= 10
        if self.health < 0{
            self.health += 10
            print("Not enough health to run!")
        }
        else{
            print("Running")
        }
    }
}

class Cheetah: Cat{
    override init(name: String){
        super.init(name: name)
    }
    
    override func run(){
        self.health -= 50
        print("Running Fast")
    }
    
    func sleep(){
        if self.health < 200 {
            self.health += 50
            if self.health > 200{
                self.health = 200
            }
        }
    }
}

class Lion: Cat{
    override init(name: String){
        super.init(name: name)
        self.health = 200
    }
    
    override func growl(){
        print("ROAR!!!! I am the King of the Jungle")
    }
}

var cheet = Cheetah(name: "Cheet")
cheet.run()
cheet.run()
cheet.run()
cheet.run()
cheet.displayHealth()
var lion = Lion(name: "Lion")
lion.run()
lion.run()
lion.run()
lion.growl()



