import fetch from 'isomorphic-fetch';

const url = `/api/uitstaps`;

export default {

  create: (content, naam, uitstap, positive, negative)  => {
    const method = `POST`;
    const body = new FormData();
    if (content) body.append(`content`, content);
    if (naam) body.append(`naam`, naam);
    body.append(`positive`, positive);
    body.append(`negative`, negative);
    body.append(`uitstap`, uitstap);

    return fetch(url, {method, body})
      .then(r => r.json());
  },

  read: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  delete: _id => {
    const method = `DELETE`;

    return fetch(`${url}/${_id}`, {method});
  }

};
