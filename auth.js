import base64 from 'base-64';

function decodeCredentials(authHeader) {
  const [type, credentials] = authHeader.split(' ');

  if (type === 'Basic' && credentials) {
    const decodedCredentials = base64.decode(credentials);
    
    const [username, password] = decodedCredentials.split(':');
    
    return [username, password];
  } else {
    return [];
  }
}

export default function (request, response, next) {
  const [username, password] = decodeCredentials(
    request.headers.authorization || ''
  );

  if (username === 'admin' && password === 'admin') {
    return next();
  }

  response.set('WWW-Authenticate', 'Basic realm="user_pages"');
  response.status(401).send('Authentication required.');
};