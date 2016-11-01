//: Playground - noun: a place where people can play

import UIKit

func tossCoin() -> String{
    print("Tossing a coin!")
    let toss = arc4random_uniform(2)
    print(toss)
    
    if toss == 1{
        let result = "Heads"
        return result
    }
    else{
        let result = "Tails"
        return result
    }
}

print(tossCoin())

func tossMultipleCoins(num: Int) -> Double{
    var heads = Int()
    var tails = Int()
    for _ in 0...num{
        if tossCoin() == "Heads"{
            heads += 1
        }
        else{
            tails += 1
        }
    }
    return Double(heads/tails)
}

print(tossMultipleCoins(num: 30))