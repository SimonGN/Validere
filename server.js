const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const transport = require('./config/nodemailer.config');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.post('/contacto', (req, res, next) => {
    const { name, email, phone, comentarios } = req.body;
    transport
      .sendMail({
        from: 'Validere <info@validere.es>',
        to: 'info@validere.es',
        subject: 'Contacto',
        text: '',
        html: `<html><p>Nombre: ${name}</p><p>Email: ${email}</p><p>Teléfono: ${phone}</p><p>Comentarios: ${comentarios}</p></html>`,
      })
      .then(() => res.status(200).json({ message: 'Email send' }))
      .catch(() => res.status(500).json({ message: 'Error Servidor' }));
  });
  server.post('/validate', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({message: 'Email sent'})
  });

  nextI18next.i18n.languages = ['es', 'en'];
  nextI18next.i18n.language ? nextI18next.i18n.language = nextI18next.i18n.language : 'es';
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
