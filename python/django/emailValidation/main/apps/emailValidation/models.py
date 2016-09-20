from __future__ import unicode_literals
from django.db import models
from django.http import HttpResponse
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class EmailManager(models.Manager):
	def register(self, email):
		if EMAIL_REGEX.match(email) and len(email)>1:
			email = self.create(email=email)
			return (True, "Your email has been successfully added!")

		else:
			return (False, "Your email is invalid")

class Email(models.Model):
	email = models.CharField(max_length=45)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = EmailManager()
