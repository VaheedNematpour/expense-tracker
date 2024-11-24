from django.urls import path
from . import views


urlpatterns = [
    # category
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_detail),

    # expense
    path('expenses/', views.expense_list),
    path('expenses/<int:id>/', views.epxense_detail)
]

