let type: String = "Rectangle"
let description: String = "A quadrilateral with four right angles"

var width: Double = 5
var height: Double = 10.5
var area: Double = width * height

height += 1
width += 1

area = width * height
// Note how you can "interpolate" variables into Strings using the following syntax
print("The shape is a \(type) or \(description) with an area of \(area)")

var numberOfChampionships = 5
let name = "Kobe"
print("My favorite player is \(name) and he has \(numberOfChampionships) rings")
print("His jersey number is \(8 * 3)")