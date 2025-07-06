from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///parque_alcazares.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
class Dato(db.Model):
    __tablename__ = 'dato'
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    latitud = db.Column(db.Float, nullable=False)
    longitud = db.Column(db.Float, nullable=False)
    descripcion = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'<Dato {self.id}: {self.nombre}>'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/acerca')
def acerca():
    return render_template('acerca.html')

@app.route('/descripcion')
def descripcion():
    return render_template('descripcion.html')

@app.route('/autor')
def autor():
    return render_template('autor.html')

@app.route('/addpoint')
def addpoint_page():
    return render_template('addpoint.html')

@app.route('/add_point', methods=['POST'])
def add_point_data():
    if request.method == 'POST':
        lat = request.form.get('latitud')
        lon = request.form.get('longitud')

        if not lat or not lon:
            error_msg = "Error: Debes seleccionar un punto en el mapa antes de enviar el reporte."
            return render_template('addpoint.html', error=error_msg)

        lat_float = float(lat)
        lon_float = float(lon)
        
        nombre_sitio = request.form['nombre']
        fecha_reporte = datetime.strptime(request.form['fecha'], '%Y-%m-%d').date()
        desc = request.form['descripcion']

        nuevo_dato = Dato(
            nombre=nombre_sitio,
            fecha=fecha_reporte,
            latitud=lat_float,
            longitud=lon_float,
            descripcion=desc
        )

        db.session.add(nuevo_dato)
        db.session.commit()

        return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)