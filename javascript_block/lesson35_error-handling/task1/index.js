window.addEventListener('error', function onUnhandledError(err) {
  // console.log(err);
  console.error('error', err.message);
});

let userParsingResult;

try {
  const user = JSON.parse('{"name": "Tom"}');
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"name": "Apple"');
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}

// try {
//   throw new ReferenceError();
//   const product = JSON.parse('{"name": "Apple"');
//   console.log('Product data: ', product);
//   productParsingResult = 'success';
// } catch (e) {
//   productParsingResult = 'error';
//   if (e instanceof SyntaxError) {
//     console.error('Handled');
//   } else {
//     throw e;
//   }
// } finally {
//   console.error(`Product parsing finished with ${productParsingResult}`);
// }
