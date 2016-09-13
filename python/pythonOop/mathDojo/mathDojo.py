class mathDojo(object):
	def __init__(self):
		self.total = 0
	def add(self, *x):
		self.x = x
		for i in self.x:
			if type(i) in [list,tuple]:
				self.total += sum(i)
			else:
				self.total += i	
		print self.total
		return self
	def subtract(self, *x):
		self.x = x
		self.total -= sum(x)
		print self.total
		return self


mathDojo().add([4,3],(5,6,7)).add(2,4).subtract(5,3,4)

print sum([4,5,6])


