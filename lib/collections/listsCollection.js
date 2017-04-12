import Schemas from '../collections/schemas';

Lists = new Mongo.Collection('lists');

// While there isn't a user authentication yet, this will simulate an admin case
const debugMode = true; // Use 'true' to allow database inserts or 'false' to
                        // deny inserts

Lists.attachSchema(Schemas.List);

Lists.allow({
  insert() {
    return debugMode;
  },
  update() {
    return debugMode;
  },
  remove() {
    return debugMode;
  },
});

Lists.deny({
  insert() {
    return !debugMode;
  },
  update() {
    return !debugMode;
  },
  remove() {
    return !debugMode;
  },
});
