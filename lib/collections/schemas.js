export const schemasList = {};

schemasList.Question = new SimpleSchema({
  description: {
    type: String,
    label: 'Description',
  },
  items: {
    type: [String],
    minCount: 1,
    maxCount: 6,
  },
  correctItems: {
    type: [Number],
    minCount: 1,
    maxCount: 6,
  },
});

schemasList.List = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200,
  },
  description: {
    type: String,
    label: 'Description',
    max: 500,
  },
  enable: {
    type: Boolean,
    defaultValue: false,
  },
  questions: {
    type: [schemasList.Question],
    minCount: 0,
    maxCount: 20,
    optional: true,
  },
});
