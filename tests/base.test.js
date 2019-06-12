const cli = require('./cli');

it('should print out help if nothing is passed', async () => {
  const result = await  cli([], './tests/fixture');

  expect(result.code).toBe(1);
  expect(result.stderr).toContain('Options:');
});

it('should print out help if passed --help', async () => {
  const result = await  cli(['--help'], './tests/fixture');

  expect(result.code).toBe(0);
  expect(result.stdout).toContain('Options:');
});
