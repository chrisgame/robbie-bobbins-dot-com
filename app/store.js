var Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

export default Store;
