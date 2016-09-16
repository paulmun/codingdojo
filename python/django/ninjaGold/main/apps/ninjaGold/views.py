from django.shortcuts import render, redirect
import random, datetime

# Create your views here.
def index(request):
	if 'totalGold' not in request.session:
		request.session['totalGold'] = 0
	return render(request, "index.html")

def process(request):
	if request.POST['odds'] == 'farm':
		gold = random.randint(10,20)
	elif request.POST['odds'] == 'cave':
		gold = random.randint(5,10)
	elif request.POST['odds'] == 'house':
		gold = random.randint(2,5)
	elif request.POST['odds'] == 'casino':
		gold = random.randint(-50,50)
	request.session['totalGold'] += gold
	if 'newLine' not in request.session:
		request.session['newLine'] = ""
	request.session['newLine'] += "Earned "+str(gold)+" golds from the "+request.POST['odds']+str(datetime.datetime.now())
	return redirect('/')