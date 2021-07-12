import express from 'express';
import path from 'path';
import pinoHttp from 'pino-http';
import session from 'express-session';
import bodyParser from 'body-parser';
import setupNunjucks from './lib/nunjucks/setup';
import requestIdGenerator from './lib/request-id-generator';
import routes from './routes';
import config from './config';
import sessionConfig from './lib/session/session-config';
import getApplicationEnvironment from './lib/get-application-environment';
import { previousRequestToResLocals } from './middleware/previous-request-to-res-locals';
import { previousRequestFailureToResLocalsErrorMap } from './middleware/previous-request-failure-to-res-locals-error-map';
import { clearPreviousRequestFromSession } from './middleware/clear-previous-request-from-session';

const app = express();

app.use(
  pinoHttp({
    genReqId: () => requestIdGenerator(),
  }),
);

app.use(session(sessionConfig(getApplicationEnvironment())));

if (config.expressSession.useSecureCookie) {
  app.set('trust proxy', 1); // trust first proxy
}

const isDev = app.get('env') === 'development';

setupNunjucks({
  app,
  isDev,
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'njk');

app.use(previousRequestToResLocals);
app.use(previousRequestFailureToResLocalsErrorMap);
app.use(clearPreviousRequestFromSession);
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
