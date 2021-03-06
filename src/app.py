import os
import uuid
import secrets
import string
import smtplib
from smtplib import SMTPException
from threading import Thread
from flask_mail import Mail, Message
from flask import Flask, request, jsonify, url_for, send_from_directory, current_app
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db

from api.admin import setup_admin

# Configuración del email
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
	"MAIL_USERNAME": 'qrplusservices@gmail.com',
	"MAIL_PASSWORD":'Qr#services052021',
    "DONT_REPLY_FROM_EMAIL": ('medicQR', 'qrplusservices@gmail.com')
}

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config.update(mail_settings)
mail = Mail(app)

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)
mail.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# INICIO - Funciones para envio de correos.
# Función para envio asincrono de correos.
def _send_async_email(app, msg):
    with app.app_context():
        try:
            mail.send(msg)
        except SMTPException:
            exception("Ocurrió un error al enviar el email")

# Función para envio de correos.
def send_email(subject, sender, recipients, text_body,
               cc=None, bcc=None, html_body=None):
    msg = Message(subject, sender=sender, recipients=recipients, cc=cc, bcc=bcc)
    msg.body = text_body
    if html_body:
        msg.html = html_body
    Thread(target=_send_async_email, args=(current_app._get_current_object(), msg)).start()
# FIN - Funciones para envio de correos.

# INICIO - Función para envio directo de de correos con gmail.
def send_email_gmail(subject, to, text_body):
    gmail_user = 'qrplusservices1@gmail.com'
    gmail_password = 'Qr#services11052021'

    sent_from = gmail_user
    to = to
    subject = subject
    body = text_body

    email_text = """\
    From: %s
    To: %s
    Subject: %s

    %s
    """ % (sent_from, to, subject, body)

    # Creamos la conexión segura con el servidor
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()

    # Nos autenticamos
    server.login(gmail_user, gmail_password)

    # Enviamos el correo
    server.sendmail(sent_from, to, email_text)

    # Cerramos la conexión
    server.close()
# FIN - Función para envio directo de de correos con gmail.

def processString(txt):
    specialChars = "#$%^&*áéíóúÁÉÍÓÚ" 
    
    for specialChar in specialChars:
        txt = txt.replace(specialChar, '')

    return txt

# INICIO - Función para generar códigos alfanumericos aleatorios
def codeGenerate():
    password = ""
    
    # alphabet = string.ascii_letters + string.digits
    # while True:
    #     password = ''.join(secrets.choice(alphabet) for i in range(15))
    #     if (any(c.islower() for c in password)
    #             and any(c.isupper() for c in password)
    #             and sum(c.isdigit() for c in password) >= 3):
    #         break

    for i in range(8):
        password += secrets.choice(string.digits)

    return password
# FIN - Función para generar códigos alfanumericos aleatorios

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
