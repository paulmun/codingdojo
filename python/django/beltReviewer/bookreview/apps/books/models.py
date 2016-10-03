from __future__ import unicode_literals
from django.db import models
from ..logreg.models import Users

# Create your models here.
class ReviewsManager(models.Manager):
	def creator(self, **kwargs):
		if not kwargs['review']:
			return (False, "Please enter a review!")
		else:
			item = Books.objects.get(id=kwargs['book'])
			user = Users.objects.get(id=kwargs['user'])
			self.create(review=kwargs['review'], rating=kwargs['rating'], user=user, book=item)
			return True
		

class BooksManager(models.Manager):
	def creator(self, **kwargs):
		if not kwargs['title']:
			return (False, "Please enter a title for the book being reviewed!")

		else:
			book = self.create(title=kwargs['title'],author=kwargs['author'])
			return (True, book)

class Books(models.Model): 
	title = models.CharField(max_length=45)
	author = models.CharField(max_length=45)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = BooksManager()

class Reviews(models.Model):
	review = models.TextField(max_length=1000)
	rating = models.IntegerField()
	book = models.ForeignKey(Books)
	user = models.ForeignKey(Users)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = ReviewsManager()
