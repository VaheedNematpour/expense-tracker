from django.urls import path
from . import views


urlpatterns = [
    # category
    path('categories/', views.category_list),

    # expense
]

