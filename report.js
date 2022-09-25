var newman = require('newman');

newman.run({
   collection: './collection/collection.json',
   reporters: 'htmlextra',
   iterationCount: 1,
   reporter: {
     htmlextra: {
       export:'./Reports/report.html'
     }
   }
}, function (err, summary) {
  if (err) { throw err; }
  console.info('collection run complete!');
});