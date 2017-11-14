import path from 'path';

global.__SERVER__ = true;
global.__CLIENT__ = false;

export const viewDir = path.join(__dirname, '../build/views');

export const publicDir = path.join(__dirname, '../build/public');

export const faviconPath = path.join(__dirname, '../build/public/favicon.ico');
