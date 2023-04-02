from rest_framework import serializers

from .models import Post, Comment, PostCategory


class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCategory
        fields = ['id', 'name']


class PostSerializer(serializers.ModelSerializer):
    postcategory_set = PostCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'created_at', 'updated_at', 'postcategory_set']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'text', 'created_at', 'updated_at', ]
