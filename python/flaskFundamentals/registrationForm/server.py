from flask import Flask, render_template, redirect, request, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app=Flask(__name__)
app.secret_key="Yup"
@app.route('/')
def index():
	return render_template("index.html")
@app.route('/verify', methods=['POST'])
def verify():
	if len(request.form['email']) < 1:
		flash("Email cannot be left empty!")
	elif not EMAIL_REGEX.match(request.form['email']):
		flash("Invalid Email Address!")
	if len(request.form['firstName']) < 1:
		flash("First name cannot be left empty!")
	elif str.isalpha(str(request.form['firstName']))==False:
		flash("Names dont' have numbers!")	
	if len(request.form['lastName']) < 1:
		flash("Last name cannot be left empty!")
	elif str.isalpha(str(request.form['lastName']))==False:
		flash("Names don't have numbers!")
	if len(request.form['password']) < 9:
		flash("Passwords need to be at least 8 characters long!")
	if not request.form['confirmPass']==request.form['password']:
		flash("Passwords do not match")
	return redirect('/')
app.run(debug=True)