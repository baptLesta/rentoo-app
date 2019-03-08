import { to as toFromLibrary } from 'await-to-js';
import pe from 'parse-error';
import {HTTP_STATUS} from 'http-status-codes';

async function to(promise) {
  const [err, res] = await toFromLibrary(promise);
  if (err) return [pe(err)];

  return [null, res];
};

function sendError(res, err, code?: HTTP_STATUS) { // Error Web Response
  if (typeof err === 'object' && typeof err.message !== 'undefined') {
    err = err.message; // eslint-disable-line
  }

  if (typeof code !== 'undefined') res.statusCode = code; // eslint-disable-line

  return res.json({ success: false, error: err });
}

function sendSuccess(res, data, code?: HTTP_STATUS) { // Success Web Response
  let sendData = { success: true };

  if (typeof data === 'object') {
    sendData = Object.assign(data, sendData); // merge the objects
  }

  if (typeof code !== 'undefined') res.statusCode = code; // eslint-disable-line

  return res.json(sendData);
}

function throwError(errorMsg, log) {
  if (log === true) {
    console.error(errorMsg);
  }

  throw new Error(errorMsg);
}

export { to, sendError, sendSuccess, throwError };
