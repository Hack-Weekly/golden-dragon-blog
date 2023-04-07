from django.contrib import admin

from .models import Post, Comment, PostCategory


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'user', 'categories', 'created_at', 'updated_at']
    inlines = [CommentInline]

    fieldsets = [
        ('Main', {
            'fields': ('title', 'body', 'user', 'category',)
        }),
    ]

    def categories(self, obj):
        return [x.name for x in obj.category.all()]

    def has_delete_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        return False


@admin.register(PostCategory)
class PostCategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

    fieldsets = [
        ('Main', {
            'fields': ('name',)
        }),
    ]

    def has_delete_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        return False
