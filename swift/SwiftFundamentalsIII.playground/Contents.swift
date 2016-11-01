//: Playground - noun: a place where people can play

import UIKit

var numbers: [Int] = []

for i in 1...255{
    numbers.append(i)
}

print(numbers)

var rand1 = Int(arc4random_uniform(UInt32(numbers.count-1)))
var rand2 = Int(arc4random_uniform(UInt32(numbers.count-1)))
var temp = numbers[rand1]
numbers[rand1] = numbers[rand2]
numbers[rand2] = temp

print(numbers)

for i in 1...100{
    var rand1 = Int(arc4random_uniform(UInt32(numbers.count-1)))
    var rand2 = Int(arc4random_uniform(UInt32(numbers.count-1)))
    var temp = numbers[rand1]
    numbers[rand1] = numbers[rand2]
    numbers[rand2] = temp
}

print(numbers)

var solution: Int = Int()
print(solution)

for i in 0...numbers.count-1{
    if(numbers[i] == 42){
        solution = i
        print("We found the answer to the Ultimate Question of Life, the Universe and Everything at index \(i)")
    }
}
var popped = numbers.remove(at: solution)
print(popped)