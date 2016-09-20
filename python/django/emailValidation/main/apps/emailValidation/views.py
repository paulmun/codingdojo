from django.shortcuts import render, redirect
from django.contrib import messages
from . import models

def index(request):
	context = {'emails': models.Email.objects.all()}
	return render(request, "index.html", context)

def add(request):
	email = models.Email.objects.register(email=request.POST['email'])
	if email[0]:
		messages.success(request, email[1])
	else:
		messages.error(request, email[1])
	return redirect('/')
