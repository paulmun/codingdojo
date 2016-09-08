from flask import Flask, render_template, session, redirect, request
import random
app = Flask(__name__)
app.secret_key='yup'
@app.route('/')
def index():
	session['correct']=random.randrange(0,101)
  	return render_template("index.html")
@app.route('/verify', methods=['POST'])
def verify():
	print session['correct']
	print request.form['guess']
	guess=int(request.form['guess'])
	if guess > session['correct']:
		print "high"
		return render_template("high.html")
	elif guess < session['correct']:
		print "low"
		return render_template("low.html")
	else: 
		print "correct"
		return render_template("correct.html")
@app.route('/restart')
def restart():
	session.pop('correct')
	return redirect("/")
app.run(debug=True)