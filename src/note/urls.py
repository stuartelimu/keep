from rest_framework.routers import DefaultRouter
from .views import NoteView

app_name = 'note'

router = DefaultRouter()
router.register(r'notes', NoteView, basename='note')
urlpatterns = router.urls