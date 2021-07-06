import express from 'express';
import path from 'path';
import pinoHttp from 'pino-http';
import setupNunjucks from './lib/nunjucks/setup';
import requestIdGenerator from './lib/request-id-generator';
import routes from './routes';
import config from './config';

const app = express();
app.use(
  pinoHttp({
    genReqId: () => requestIdGenerator(),
  }),
);

const isDev = app.get('env') === 'development';

setupNunjucks({
  app,
  isDev,
});

app.set('view engine', 'njk');
app.use(routes);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(
  '/assets',
  express.static(path.join(__dirname, '..', 'node_modules', 'govuk-frontend', 'govuk', 'assets')),
);
app.use(
  '/assets/govuk/all.js',
  express.static(path.join(__dirname, '..', 'node_modules', 'govuk-frontend', 'govuk', 'all.js')),
);

if (process.env.NODE_ENV !== 'test') {
  app.listen(config.server.port, () => {
    console.log(`⚡ ️[server]: Server is running at https://localhost:${config.server.port}`);
  });
}

export default app;
