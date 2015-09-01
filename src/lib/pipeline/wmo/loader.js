const ArrayUtil = require('../../utils/array-util');
const {DecodeStream} = require('blizzardry/lib/restructure');
const Loader = require('../../net/loader');
const WMO = require('blizzardry/lib/wmo');

const loader = new Loader();

module.exports = function(path) {
  return loader.load(path).then((raw) => {
    const stream = new DecodeStream(ArrayUtil.toBuffer(raw));
    const data = WMO.decode(stream);
    return data;
  });
};