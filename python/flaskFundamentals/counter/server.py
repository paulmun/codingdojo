from flask import Flask, render_template, session, redirect
app = Flask(__name__)

app.secret_key='yup'
@app.route('/')
def index():
	if not session.has_key('times'):
		session['times']=0
	session['times'] = session['times']+1
  	return render_template("index.html",)
@app.route('/double')
def double():
	session['times'] = session['times']+1
	return redirect('/')
@app.route('/resetter')
def resetter():
	session['times'] = 0
	return redirect('/')
app.run(debug=True)