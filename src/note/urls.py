from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import NoteView, api_login


app_name = 'note'

router = DefaultRouter()
router.register(r'notes', NoteView, basename='note')
urlpatterns = router.urls

urlpatterns += [
    path("login/", api_login, name="api-login"),
]