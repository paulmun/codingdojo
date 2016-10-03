from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='books_index'),
    url(r'^add$', views.addbook, name = 'books_add'),
    url(r'^create$', views.create, name='books_create'), 
    url(r'^(?P<bookID>[0-9]+)$', views.showbook, name='books_show'),
    url(r'^/(?P<bookID>[0-9]+)/add$', views.addreview, name='addreview'),
    url(r'^(?P<reviewID>[0-9]+)$', views.destroy, name='destroyreview')   
]