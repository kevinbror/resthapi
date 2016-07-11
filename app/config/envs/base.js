/**
 * Created by iyobo.
 */
module.exports = {
	env: 'development',
	server: {
		port: 8000,
		host: 'localhost',
	},

	db: {
		mongodb: {
			url: 'http://localhost:8123',
			dbname: 'livinghired',
		}
	},

	/**
	 * Be sure to generate a fresh secret for each app.
	 * You can have multiple rotating keys
	 */
	crypto: {
		secrets: ['C5oCk7xWzoiv7huzWqfLTYzdnsDvtdnc'],
		saltrounds: 8,
	}

}

 