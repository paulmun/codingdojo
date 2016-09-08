from flask import Flask, render_template, request, flash, redirect
app = Flask(__name__)
app.secret_key='yup'
@app.route('/')
def index():
  return render_template("index.html")
@app.route('/result', methods=['POST'])
def result():
	name=request.form['name']
	location=request.form['location']
	language=request.form['language']
	comment=request.form['comment']
	if len(name) < 1:
		flash("Name cannot be empty!")
		return redirect('/')
	if len(comment) > 120:
		flash("Please keep your comments short!")
		return redirect('/')
	elif len(comment) < 1:
		flash("Maybe not so optional...")
		return redirect('/')
	return render_template("result.html", name=name, location=location, language=language, comment=comment)
app.run(debug=True)