import fetch from 'isomorphic-fetch';

const getLocaleMessages = messageUrl =>
  fetch(messageUrl).then(res => res.json());

export { getLocaleMessages };
