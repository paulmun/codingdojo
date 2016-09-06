print "Scores and Grades"
for count in range(0,10):
	score = input("Enter your score:")
	if 89<score<=100:
		print "Score: "+str(score)+"; Your grade is A"
	elif 79<score<=89:
		print "Score: "+str(score)+"; Your grade is B"
	elif 69<score<=79:
		print "Score: "+str(score)+"; Your grade is C"
	elif 59<score<=69:
		print "Score: "+str(score)+"; Your grade is D"
	else:
		print "Score: "+str(score)+"; Your grade is F"
print "End of the program. Bye!"