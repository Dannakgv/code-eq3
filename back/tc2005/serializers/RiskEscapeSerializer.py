from rest_framework import serializers
from .models import RiskEscape

class RiskEscapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RiskEscape
        fields = '__all__'

