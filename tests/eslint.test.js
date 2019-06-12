const cli = require('./cli');

it('run eslint on codebase when eslint is passed', async () => {
  const result = await cli(['eslint'], './tests/fixture');

  expect(result.code).toBe(0);
  expect(result.stdout).toContain('eslint [options] file.js [file.js] [dir]');
});
