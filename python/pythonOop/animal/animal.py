class Animal(object):
	def __init__(self, name = None):
		self.name = name
		self.health = 100

	def walk(self):
		print "Walking"
		self.health -= 1
		return self

	def run(self):
		print "Running"
		self.health -= 5
		return self

	def displayHealth(self):
		print self.name
		print self.health

class Dog(Animal):
	def __init__(self, name):
		super(Dog, self).__init__(name)
		self.health = 150
	
	def pet(self):
		self.health += 5
		return self

class Dragon(Animal):
	def __init__(self, name):
		super(Dragon, self).__init__(name)
		self.health = 170
	
	def fly(self):
		self.health -= 10
		return self
	
	def displayHealth(self):
		print "this is a dragon!"
		print self.name
		print self.health

animal = Animal("aminal")
doggo = Dog("Doge")
draggo = Dragon("Draggo")

animal.walk().walk().walk().run().run().displayHealth()
doggo.walk().walk().walk().run().run().pet().displayHealth()
draggo.walk().walk().walk().run().run().fly().fly().displayHealth()
