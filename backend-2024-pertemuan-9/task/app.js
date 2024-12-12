/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructing Object
 */

const { index, store, update, destroy } = require('./FruitController');

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 * - Jalankan program: node app.js
 */
const main = () => {
  console.log("Initial fruits:", index());

  console.log(store("Pineapple"));
  console.log("After adding fruit:", index());

  console.log(update(1, "Strawberry"));
  console.log("After updating fruit:", index());

  console.log(destroy(2));
  console.log("After removing fruit:", index());
};

main();
