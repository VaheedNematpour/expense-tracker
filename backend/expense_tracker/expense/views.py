from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Expense
from .serializers import CategorySerializer, ExpenseSerializer

@api_view()
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)

    return Response(serializer.data)


@api_view()
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    serializer = CategorySerializer(category)

    return Response(serializer.data)


@api_view()
def expense_list(request):
    expenses = Expense.objects.all()
    serializer = ExpenseSerializer(expenses, many=True)

    return Response(serializer.data)


@api_view()
def epxense_detail(request, id):
    expense = get_object_or_404(Expense, pk=id)
    serializer = ExpenseSerializer(expense)

    return Response(serializer.data)
