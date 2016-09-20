from django.shortcuts import render, redirect
from . import models

# Create your views here.
def index(request):
	context={
		'courses':models.Courses.objects.all()
	}
	return render(request,'index.html', context)

def create(request):
	models.Courses.objects.create(name=request.POST['name'], description = request.POST['description'])
	return redirect('/')

def destroy(request, id):
	course = models.Courses.objects.get(id=id)
	if request.method == 'POST':
		course.delete()
		return redirect('/')
	else:
		context = {
			"course": course
		}
		return render(request, "delete.html", context)
