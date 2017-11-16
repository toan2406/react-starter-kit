import { schema } from 'normalizr';

const owner = new schema.Entity('owners');
const repo = new schema.Entity('repos', { owner });

export { owner, repo };
