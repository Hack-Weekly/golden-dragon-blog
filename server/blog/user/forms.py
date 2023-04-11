from django import forms
from django.contrib.auth.forms import (
  AuthenticationForm,
  UserCreationForm,
  PasswordResetForm
)
from django.contrib.auth.models import User


class MyUserCreationForm(UserCreationForm):
    username = forms.CharField(required=True, widget=forms.TextInput(
        attrs={
            'class': 'form-control'
            }))
    first_name = forms.CharField(required=True, widget=forms.TextInput(
        attrs={
            'class': 'form-control'
            }))
    last_name = forms.CharField(required=True, widget=forms.TextInput(
        attrs={
            'class': 'form-control'
            }))
    email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(
          attrs={
              'class': 'form-control'
          }))
    password = forms.CharField(
        required=True,
        label='Enter password',
        widget=forms.PasswordInput(
            attrs={
                'class': 'form-control'
            }))

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "password")

    def __init__(self, *args):
        super(MyUserCreationForm, self).__init__(*args)
        for f in {'first_name', 'last_name'}:
            self.fields[f].required = True


class UserResetPasswordForm(PasswordResetForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    email = forms.EmailField(required=True, widget=forms.EmailInput(
        attrs={
            'class': 'form-control'
            }))
