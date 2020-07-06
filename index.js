module.exports = function(bundler) {
	bundler.addAssetType('gutt', require.resolve('./gutt-asset'))
}
