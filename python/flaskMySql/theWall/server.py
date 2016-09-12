from flask import Flask, redirect, render_template, session, request, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

app = Flask(__name__)
app.secret_key = "secret_key"
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'thewall')
NAME_REGEX = re.compile(r'[0-9]')
EMAIL_REGEX = re.compile(r'[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/register', methods = ['POST'])
def create():
	fname = request.form['fname']
	lname = request.form['lname']
	email = request.form['email']
	password = request.form['pass']
	cpassword = request.form['cPass']
	pw_hash = bcrypt.generate_password_hash(password)
	formCheck = True

	if NAME_REGEX.match(fname) or len(fname) < 3:
		flash('Please enter a valid name', 'flashfname')
		fname = ""
		formCheck = False
	if NAME_REGEX.match(lname) or len(lname) < 3:
		flash('Please enter a valid name', 'flashlname')
		lname = ""
		formCheck = False
	if not EMAIL_REGEX.match(email):
		flash('Please enter a valid email', 'flashemail')
		email = ""
		formCheck = False
	elif not mysql.query_db("SELECT * FROM users WHERE users.email = :email", {"email": email}) == []:
		flash('This email is already in use', 'flashemail')
		email = ""
		formCheck = False
	if len(password) < 8:
		flash('Password must be at least 8 characters long', 'flashpass')
		formCheck = False
	if not password == cpassword:
		flash('Passwords must match', 'flashcpass')
		formCheck = False
	if formCheck == True:
		insertQuery = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:fname, :lname, :email, :password, NOW(), NOW())"
		runQuery = "SELECT * FROM users WHERE users.email = :email"
		newUser = {"fname": fname, "lname": lname, "email": email, "password": pw_hash}
		user = {"email":email}
		mysql.query_db(insertQuery, newUser)
		session['userInfo'] = mysql.query_db(runQuery,user)
		return redirect('/wall')
	return redirect('/')

@app.route('/login', methods = ['POST'])
def login():
	email = request.form['email']
	password = request.form['pass']
	runQuery = "SELECT * FROM users WHERE users.email = :email"
	user = {"email":email}
	session['userInfo'] = mysql.query_db(runQuery,user)
	if session['userInfo'] == []:
		flash('No account exists with the Email Address you entered', 'flashloginemail')
	elif bcrypt.check_password_hash(session['userInfo'][0]['password'], password) == True:
		return redirect('/wall')
	else:
		flash('Incorrect password entered. Try Again!', 'flashloginpass')
	return redirect('/')
@app.route('/wall')
def wall():
	messages = mysql.query_db("SELECT * FROM messages")
	comments = mysql.query_db("SELECT * FROM comments")
	users = mysql.query_db("SELECT users.id, users.first_name, users.last_name FROM users")
	print comments
	return render_template('wall.html', messages=messages, comments=comments, users=users)

@app.route('/message', methods = ['POST'])
def message():
	msg = request.form['msg']
	insertQuery = "INSERT INTO messages (message, created_at, updated_at, users_id) VALUES (:message, NOW(), NOW(), :usersId)"
	newMsg = {"message": msg, "usersId":session['userInfo'][0]['id']}
	mysql.query_db(insertQuery,newMsg)
	return redirect('/wall')

@app.route('/comment', methods = ['POST'])
def comment():
	cmnt = request.form['cmnt']
	msgId = request.form['messageId']
	insertQuery = "INSERT INTO comments (comment, created_at, updated_at, users_id, messages_id) VALUES (:comment, NOW(), NOW(), :usersId, :messagesId)"
	newCmnt = {"comment": cmnt, "usersId":session['userInfo'][0]['id'], "messagesId":msgId}
	mysql.query_db(insertQuery,newCmnt)
	return redirect('/wall')

@app.route('/logout')
def logout():
	session['userInfo'] = []
	return redirect('/')

app.run(debug = True)