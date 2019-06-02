const cli = require('./cli');

test('Code should be 0', async () => {
  const result = await  cli([], './tests/fixture');
  expect(result.stdout).toBe('Retreat from the xupptumblers!\n');
});
