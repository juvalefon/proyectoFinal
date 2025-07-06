# Alerta Canina 🐾

Una aplicación web para el reporte y visualización de la problemática de excrementos caninos en el Parque Alcázares de Bogotá. Este proyecto busca generar conciencia y proveer datos para mejorar el cuidado de los espacios públicos.

![Screenshot de Alerta Canina](./docs/logo_copy.png)

---

## ✨ Características Principales

* **Reporte Geoespacial:** Permite a los usuarios marcar en un mapa interactivo la ubicación exacta de una incidencia.
* **Formulario Intuitivo:** Un formulario sencillo para añadir detalles del reporte como fecha y descripción.
* **Backend Robusto:** Construido con Flask y SQLAlchemy para gestionar y almacenar los datos de forma segura.
* **Interfaz Limpia:** Un diseño moderno y responsivo gracias a Bootstrap 5.
* **Entorno de Desarrollo Aislado:** Configurado con un entorno virtual para una gestión de dependencias limpia y reproducible.

---

## 🛠️ Tecnologías Utilizadas

* **Backend:** Python, Flask, SQLAlchemy
* **Base de Datos:** SQLite
* **Frontend:** HTML5, CSS3, JavaScript
* **Frameworks y Librerías:** Bootstrap 5, Leaflet.js

---

## 🚀 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

* Tener instalado [Python 3.10+](https://www.python.org/downloads/)
* Tener instalado [Git](https://git-scm.com/downloads/)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/juvalefon/proyectoFinal.git](https://github.com/juvalefon/proyectoFinal.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd proyectoFinal
    ```

3.  **Crea y activa un entorno virtual:**
    ```bash
    # Crear el entorno
    python -m venv .venv

    # Activar en Windows
    .venv\Scripts\activate

    # Activar en macOS/Linux
    # source .venv/bin/activate
    ```

4.  **Instala las dependencias:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Ejecuta la aplicación:**
    ```bash
    python api.py
    ```
    La aplicación estará disponible en `http://127.0.0.1:5001`.

---

## 👤 Autor

**Juana Fonseca**

* GitHub: [@juvalefon](https://github.com/juvalefon)