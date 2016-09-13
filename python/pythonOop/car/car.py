class car(object):
	def __init__(self, price = 0, speed = '20mph', fuel = 'Full', mileage = '10mpg'):
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage
		self.tax = 0
		if self.price > 10000:
			self.tax = .15
		else:
			self.tax = .12
	def display_all(self):
		print "Price: "+str(self.price)
		print "Speed: "+str(self.speed)
		print "Fuel: "+str(self.fuel)
		print "Tax: "+str(self.tax)
		print ""

car1 = car(2000, '35mph', 'Full', '15mpg')
car1.display_all()
car2 = car(2000, '5mph', 'Not Full', '105mpg')
car2.display_all()
car3 = car(2000, '15mph', 'Kind of Full', '95mpg')
car3.display_all()
car4 = car(2000, '25mph', 'Full', '25mpg')
car4.display_all()
car5 = car(2000, '45mph', 'Empty', '25mpg')
car5.display_all()
car6 = car(20000000, '15mph', 'Empty', '15mpg')
car6.display_all()
