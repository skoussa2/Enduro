// * ———————————————————————————————————————————————————————— * //
// * 	check juicebox enabledget_application_settings
// * ———————————————————————————————————————————————————————— * //
const api_call = function () {}

// * enduro dependencies
const flat = require(enduro.enduro_path + '/libs/flat_db/flat')

// routed call
api_call.prototype.call = function (req, res, enduro_server) {

	let application_settings = enduro.cms_data.global.settings

	application_settings.juicebox_enabled = enduro.config.juicebox_enabled

	application_settings.has_admins = true

	flat.load(enduro.config.admin_secure_file)
		.then((raw_userlist) => {

			// if there are no users
			if (!raw_userlist.users) {
				application_settings.has_admins = false
			}

			res.send(application_settings)
		})

}

module.exports = new api_call()
