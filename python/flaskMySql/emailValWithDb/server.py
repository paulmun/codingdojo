from flask import Flask, render_template, redirect, flash, request, session
import re, datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key="yup"
mysql = MySQLConnector(app, 'emailValDB')
# an example of running a query
print mysql.query_db("SELECT * FROM emails")
@app.route('/')
def index():
	queryResult=mysql.query_db("SELECT emails.name, emails.created_at FROM emails")
	return render_template('index.html', queryResult=queryResult)
@app.route('/emailList', methods=["POST"])
def emailInsert():
	
	address=request.form['address']
	if not EMAIL_REGEX.match(request.form['address']):
		flash("The Email address you've entered is invalid!")
	else:
		mysql.query_db("INSERT INTO emails (name, created_at) VALUES (:address, NOW())", {"address":address})

	return redirect('/')

app.run(debug=True)