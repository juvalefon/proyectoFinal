from flask_sqlalchemy import SQLAlchemy
from geoalchemy2 import Geometry
from sqlalchemy import Date, String

db = SQLAlchemy()

class Dato(db.Model):
    __tablename__ = 'dato'

    # localizacion es un campo geoespacial POINT
    # srid=4326 es sistema de coordenadas geográficas (latitud/longitud)
    localizacion = db.Column(Geometry('POINT', srid=4326), primary_key=True, nullable=False)

    # fecha de tipo date
    fecha = db.Column(Date, nullable=False)

    # descripcion con máximo 200 caracteres
    descripcion = db.Column(String(200), nullable=False)

    def __repr__(self):
        return f"<Dato(localizacion={self.localizacion}, fecha={self.fecha}, descripcion='{self.descripcion}')>"
from flask import Flask
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:tu_password@localhost/tu_base_de_datos'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()
from models import db, Dato
from datetime import date
from geoalchemy2.shape import from_shape
from shapely.geometry import Point

# Crear un punto con shapely (latitud, longitud)
punto = Point(10.5, 20.3)

# Convertir el punto a formato compatible con GeoAlchemy2 (WKB)
geo_point = from_shape(punto, srid=4326)

# Crear una instancia de Dato
nuevo_dato = Dato(
    localizacion=geo_point,
    fecha=date.today(),
    descripcion="Punto de ejemplo"
)

db.session.add(nuevo_dato)
db.session.commit()
