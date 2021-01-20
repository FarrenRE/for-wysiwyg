const fs = require( 'fs' );

fs.writeFile('dest/html/brand-list.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
