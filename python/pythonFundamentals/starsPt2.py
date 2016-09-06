def stars_letters(x):
	for i in range (len(x)):
		if isinstance(x[i], basestring):
			print x[i][0].lower()*len(x[i])
		elif int(x[i]):
			print "*"*x[i]
			
stars_letters([3,"bob","Chicken",5])