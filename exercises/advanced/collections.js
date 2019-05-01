/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */

const { pluckFirstLineFromFileAsync } = require('../bare_minimum/promiseConstructor');
const fs = require('fs');

var combineFirstLineOfManyFiles = function(filePaths, writePath) {

  var promise = [];
  for (var i = 0; i < filePaths.length; i++) {
    promise.push(pluckFirstLineFromFileAsync(filePaths[i]));
  }
  return Promise.all(promise)
    .then((data)=> {
      var file = data.join('\n');
      console.log(file);
      fs.writeFileSync(writePath, file);
    })
    .catch((err)=>{
      throw err;
    });
};
//iterate through filePaths 
//pluck first line of each file and save in var
//write new file with compiled lines


// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};