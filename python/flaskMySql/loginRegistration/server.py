from flask import Flask, session, render_template, redirect, request, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

app=Flask(__name__)
app.secret_key="secret_key"
bcrypt=Bcrypt(app)
mysql = MySQLConnector(app, 'userDb')
NAME_REGEX = re.compile(r'[0-9]')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


@app.route('/')
def index():
	return render_template('index.html')

@app.route('/register', methods=['POST'])
def create():
	fname = request.form['fname']
	lname = request.form['lname']
	email = request.form['email']
	password = request.form['pass']
	cpassword = request.form['cPass']
	pw_hash = bcrypt.generate_password_hash(password)
	formCheck = True
	
	if NAME_REGEX.match(fname) or len(fname)<3:
	 	flash('Please enter a valid name', 'flashfname')
	 	fname=""
	 	formCheck = False
	if NAME_REGEX.match(lname) or len(lname)<3:
		flash('Please enter a valid name', 'flashlname')	
		lname=""
		formCheck = False
	if not EMAIL_REGEX.match(email):
		flash('Please enter a valid email', 'flashemail')
		email=""
		formCheck = False
	elif not mysql.query_db("SELECT * FROM users WHERE users.email=:email",{"email":email}) == []:
		flash('This email is already in use', 'flashemail')
		email=""
		formCheck = False
	if len(password) < 8:
		flash('Password must be at least 8 characters long', 'flashpass')
		formCheck = False
	if not password==cpassword:
		flash('Passwords must match', 'flashcpass')
		formCheck = False
	if formCheck == True:
		insertQuery = "INSERT INTO users (first_name, last_name, email, password, created_at) VALUES (:fname, :lname, :email, :password, NOW())"
		newUser = {"fname": fname, "lname":lname, "email": email, "password": pw_hash}
		mysql.query_db(insertQuery,newUser)
		return render_template('/success.html')
	return render_template('index.html',fname=fname, lname=lname, email=email)

@app.route('/login', methods=['POST'])
def login():
	email = request.form['email']
	password = request.form['pass']
	runQuery = "SELECT * FROM users WHERE users.email=:email"
	user = {"email":email}
	session['userInfo'] = mysql.query_db(runQuery,user)
	if session['userInfo'] == []:
		flash('No account exists with the Email Address you entered', 'flashloginemail')
	elif bcrypt.check_password_hash(session['userInfo'][0]['password'], password) == True:
		return redirect("/profile/"+str(session['userInfo'][0]['id']))
	else:
		flash('Incorrect password entered. Try Again!', 'flashloginpass')
	return redirect('/')	

@app.route('/profile/<userId>')
def profile(userId):
	return render_template("profile.html")
app.run(debug=True)
