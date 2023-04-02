from django.contrib import admin

from .models import Post, Comment, PostCategory


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1


class PostCategoryInline(admin.TabularInline):
    model = PostCategory
    extra = 1


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'user', 'body', 'created_at', 'updated_at']
    inlines = [CommentInline, PostCategoryInline]



