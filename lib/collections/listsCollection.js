import schemas from './schemas';

// While there isn't a user authentication yet, this will simulate an admin case
const debugMode = true; // Use 'true' to allow database inserts or 'false' to
                        // deny inserts

Lists = new Mongo.Collection('lists');
Lists.schema = schemas.schemasList.List;

// Both methods below are responsible for allowing the client to assign data to the
// database.
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
