import random
heads = 0
tails = 0
for count in range(1,5001):
	random_num = random.random()
	x = round(random_num)
	if x == 0.0:
		heads = heads + 1
		print "Attempt #"+str(count)+": Throwing a coin... It's a head! ... Got "+str(heads)+" head(s) so far and "+str(tails)+" tail(s) so far"
	else:
		tails = tails + 1
		print "Attempt #"+str(count)+": Throwing a coin... It's a tail! ... Got "+str(heads)+" head(s) so far and "+str(tails)+" tail(s) so far"