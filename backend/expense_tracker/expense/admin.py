from django.contrib import admin
from .models import Category, Expense


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    list_per_page = 10
    search_fields = ['title__startswith']


@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'category']
    list_filter = ['category']
    list_select_related = ['category']
    list_per_page = 10
    search_fields = ['title__startswith']
