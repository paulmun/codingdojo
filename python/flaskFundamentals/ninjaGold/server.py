from flask import Flask, render_template, redirect, request, session
import random, datetime
app=Flask(__name__)
app.secret_key='yup'
count=0
@app.route('/')
def index():
	return render_template("index.html",count=count)
@app.route('/processMoney', methods=['POST'])
def processMoney():
	print request.form['building']
	if request.form['building']=="farm":
		temp=random.randint(10,20)
		session['newLine']=session['newLine']+"Earned "+str(temp)+" golds from the farm! "+str(datetime.datetime.now())
		global count
		print temp
		count=count+temp
	elif request.form['building']=="cave":
		temp=random.randint(5,10)
		session['newLine']=session['newLine']+"Earned "+str(temp)+" golds from the farm! "+str(datetime.datetime.now())
		global count
		print temp
		count=count+temp
	elif request.form['building']=="house":
		temp=random.randint(2,5)
		session['newLine']=session['newLine']+"Earned "+str(temp)+" golds from the farm! "+str(datetime.datetime.now())
		global count
		print temp
		count=count+temp
	else:
		temp=random.randint(-50,50)
		session['newLine']=session['newLine']+"Earned "+str(temp)+" golds from the farm! "+str(datetime.datetime.now())
		global count
		print temp
		count=count+temp
	return redirect('/')
app.run(debug=True)

