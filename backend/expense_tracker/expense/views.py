from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Expense
from .serializers import CategorySerializer, CreateExpenseSerializer, ExpenseSerializer

@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE'])
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    if request.method == 'GET':
        serializer = CategorySerializer(category)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        if category.expense_set.count() > 0:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        category.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET', 'POST'])
def expense_list(request):
    if request.method == 'GET':
        expenses = Expense.objects.all()
        serializer = ExpenseSerializer(expenses, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CreateExpenseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE'])
def epxense_detail(request, id):
    expense = get_object_or_404(Expense, pk=id)
    if request.method == 'GET':
        serializer = ExpenseSerializer(expense)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        expense.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
