import fetch from './fetch';

export default {
	getPages: () => fetch(`
		query { 
			allPages {
			 id 
			} 
		}
	`),
	getPage: (id) => fetch(`
		query($id: ID!) {
			Page (where: {id: $id}) {
				id, 
				routePath
			}
		}
	`, {
		"id": id,
	}),
	getPageByRoutePath: routePath => fetch(`
		query($routePath: String!) {
			allPages (where: {routePath_i: $routePath}) {
				id,
				routePath,
				pageTitle,
				description
			}
		}
	`, {
		"routePath": routePath,
	}),
};
