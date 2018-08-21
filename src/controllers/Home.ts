/**
 *	Handler for Home
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
import * as template from '../../views/index.marko'

class Home {
	public static index (req, res): void {
		res.marko(template, {
			locals: res.app.locals.app,
			title: 'Home'
		})
	}
}

export default Home
