const path = require('path');
let publicPath = process.env.NODE_ENV === 'production' ? 'lcg-front/' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
  outputDir: path.resolve(__dirname, "../../public/lcg-front"),
  indexPath: path.resolve(__dirname, "../views/lcg_front/index.blade.php"),
};
