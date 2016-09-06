def oddeve(x, y):
	for count in range (x,y+1):
		if count%2==1:			
			print "Number is "+str(count)+". This is an odd number."
		else:
			print "Number is "+str(count)+". This is an even number."

oddeve(1, 2000)