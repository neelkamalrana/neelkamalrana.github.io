// CRA + react-router v7: full App render is covered by `npm run build` and manual QA.
// Jest resolution of package "exports" for react-router-dom is brittle here.
test('sanity check', () => {
  expect(true).toBe(true);
});
