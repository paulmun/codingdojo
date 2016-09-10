from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key="Yup"
from mysqlconnection import MySQLConnector
mysql = MySQLConnector(app, 'friendsList')
@app.route('/')
def index():
	queryResult=mysql.query_db('SELECT * FROM friends')
	return render_template("index.html", queryResult = queryResult)
@app.route('/friends',methods = ['POST'])
def friendsAdd():
	mysql.query_db("INSERT INTO friends (first_name, last_name, email, created_at) VALUES (:fname, :lname, :email, NOW())",{'fname':request.form['fName'], 'lname':request.form['lName'], 'email':request.form['email']})
	return redirect('/')
@app.route('/friends/<friend>/edit')
def friendsEdit(friend):
	selectFriend = mysql.query_db('SELECT * FROM friends WHERE friends.id=:friend',{'friend':friend})
	return render_template("edit.html",selectFriend=selectFriend)
@app.route('/friends/<friendId>',methods = ['POST'])
def friendsPost(friendId):
	mysql.query_db("UPDATE friends SET first_name = :fname, last_name = :lname, email = :email WHERE id = :friendId",{'fname':request.form['fName'], 'lname':request.form['lName'], 'email':request.form['email'], 'friendId':friendId})
	return redirect('/')
@app.route('/friends/<friend>/delete')
def friendsDelete(friend):
	mysql.query_db("DELETE FROM friends WHERE id=:friend",{'friend':friend})
	return redirect('/')
app.run(debug = True)