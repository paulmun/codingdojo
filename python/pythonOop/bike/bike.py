class bike(object):
	def __init__(self, price = 0, max_speed = 0):
		print "Nice! A new bike!"
		self.price = price
		self.max_speed = max_speed
		self.miles = 0
	def displayInfo(self):
		print "This bike is worth "+str(self.price)+"."
		print "It can go up to "+str(self.max_speed)+" mph."
		print "It has been ridden "+str(self.miles)+" miles."
	def ride(self):
		print "Riding"
		self.miles = self.miles + 10
		return self
	def reverse(self):
		print "Reversing"
		print "."
		print "."
		print "."
		if self.miles - 5 <= 0:
			print "You can't back up any more!"
		else:
			self.miles = self.miles - 5
		return self

bike1 = bike(15,25)
bike2 = bike(33, 58)
bike3 = bike(22, 53)

bike1.ride().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
