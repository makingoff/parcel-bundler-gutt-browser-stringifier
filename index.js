module.exports = function(bundler) {
	bundler.addAssetType('gutt', require.resolve('./MyAsset'))
}
