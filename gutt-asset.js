const { Asset } = require('parcel-bundler')
const gutt = require('gutt')
const stringifier = require('gutt-browser-stringifier')

class GuttAsset extends Asset {
	constructor(name, options) {
		super(name, options)

		this.type = 'js'
	}

	async parse(code) {
		return gutt.parse(code)
	}

	async generate() {
		return stringifier(this.ast)
	}
}

module.exports = GuttAsset
