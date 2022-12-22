module.exports = {
  testMatch: ['**/*Test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!' +
      [
        'node-fetch',
        'fetch-blob',
        'data-uri-to-buffer',
        'jest-runtime',
        'formdata-polyfill',
      ].join('|') +
      ')',
  ],
};
