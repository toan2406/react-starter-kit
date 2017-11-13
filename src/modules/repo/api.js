import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';
import { repo as repoSchema } from './schemas';

const searchRepos = ({
  token,
  keyword = '',
  language = 'javascript',
  sort = 'stars',
  order = 'desc',
  perPage = 10
}) => {
  const url = `https://api.github.com/search/repositories?q=${keyword}+language:${language}&sort=${sort}&order=${order}&per_page=${perPage}`;
  return fetch(url)
    .then(res => res.json())
    .then(({ items }) => normalize(items, [repoSchema]));
};

const getRepo = ({ token, owner, repo }) => {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  return fetch(url)
    .then(res => res.json())
    .then(repo => normalize(repo, repoSchema));
};

export { searchRepos, getRepo };
