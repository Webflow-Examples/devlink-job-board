// non-IX3 site stub — satisfies bundler resolution
// IX3Provider's lazy-init ensures createIX3Engine is never called at runtime.
export function createIX3Engine() {
  return Promise.resolve({
    register: function () {},
    destroy: function () {},
  });
}
