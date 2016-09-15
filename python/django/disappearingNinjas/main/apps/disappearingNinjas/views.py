from django.shortcuts import render

# Create your views here.
def index(request):
	context = {"context":{"nothing":"No Ninjas Here!"}}
	return render(request, 'disappearingNinjas/index.html', context)
def ninjaColor(request, color):
	if color == "/":
		context = {"context":{"red":"raphael.jpg","blue":"leonardo.jpg","orange":"michelangelo.jpg","purple":"donatello.jpg"}}
	elif color == "/red":
		context = {"context":{"red":"raphael.jpg"}}
	elif color == "/blue":
		context = {"context":{"blue":"leonardo.jpg"}}
	elif color == "/orange":
		context = {"context":{"orange":"michelangelo.jpg"}}
	elif color == "/purple":
		context = {"context":{"purple":"donatello.jpg"}}
	else:
		context = {"context":{"notapril":"notapril.jpg"}}
	return render(request, 'disappearingNinjas/index.html', context)
