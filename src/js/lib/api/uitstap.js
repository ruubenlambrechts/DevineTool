import fetch from 'isomorphic-fetch';

const url = `/api/uitstappen`;

export default {

  create: (content, naam, datum, uitstap)  => {
    const method = `POST`;
    const body = new FormData();
    body.append(`content`, content);
    body.append(`naam`, naam);
    body.append(`datum`, datum);
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
