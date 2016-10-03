from django.shortcuts import render, redirect
from . import models
from django.core.urlresolvers import reverse
from django.contrib import messages

# Create your views here.
def index(request):
	context={'reviews': models.Reviews.objects.all().order_by('created_at')[:3], 'books':models.Books.objects.all()}
	return render(request, 'books/index.html', context)

def addbook(request):
	return render(request, 'books/newbook.html')

def create(request):
	book = models.Books.objects.create(title=request.POST['title'], author=request.POST['author'])
	models.Reviews.objects.creator(user=request.session['user'], review=request.POST['review'], rating=request.POST['rating'], book=book.id)
	bookreviews = models.Reviews.objects.filter(book=book)
	context={'book':book, 'bookreviews':bookreviews}
	return render(request, 'books/showbook.html', context)

def addreview(request, bookID):
	return redirect(reverse('books:books_show', kwargs={'bookID':bookID} ))

def showbook(request, bookID):
	book = models.Books.objects.get(id=bookID)
	bookreviews = models.Reviews.objects.filter(book=book)
	context = {'book':book, 'bookreviews':bookreviews}
	return render(request, 'books/showbook.html', context)

def destroy(request, bookID):
	return render(request, 'books:books_index')