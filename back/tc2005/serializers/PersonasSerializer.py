from rest_framework import serializers
from .models import Personas
#temp until we merge all the codes
class PersonasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personas
        fields = '__all__'
