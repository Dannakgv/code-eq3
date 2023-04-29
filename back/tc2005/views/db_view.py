from rest_framework import generics
from .models import RiskEscape, Personas
from .serializers import RiskEscapeSerializer, PersonasSerializer

class RiskEscapeList(generics.ListCreateAPIView):
    queryset = RiskEscape.objects.all()
    serializer_class = RiskEscapeSerializer

class PersonasList(generics.ListCreateAPIView):
    queryset = Personas.objects.all()
    serializer_class = PersonasSerializer