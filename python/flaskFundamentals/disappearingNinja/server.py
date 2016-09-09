from flask import Flask, render_template,session,redirect
app = Flask(__name__)
app.secret_key="yup"
@app.route('/')
def index():
	session['image']=""
	return render_template('index.html')
@app.route('/ninja')
def color():
	session['image']="ninja"
	return render_template('index.html')
@app.route('/ninja/<turt>')
def colors(turt):
	pictures={'red':'raphael','blue':'leonardo','orange':'michelangelo','purple':'donatello','other':'notapril'}
	if turt=='red':
		session['image']=pictures['red']
	elif turt=='blue':
		session['image']=pictures['blue']
	elif turt=='orange':
		session['image']=pictures['orange']
	elif turt=='purple':
		session['image']=pictures['purple']
	else:
		session['image']=pictures['other']
	return render_template('index.html')
app.run(debug=True)