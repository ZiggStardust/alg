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
				hero_image {
					id,
					publicUrl,
				},
				hero_text,
				about_us_intro_text,
				about_us_text,
				about_us_image {
					id,
					publicUrl,
				}
				event_1_image {
					id,
					publicUrl,
				},
				event_1_text,
				event_2_image {
					id,
					publicUrl,
				},
				event_2_text,
				event_3_image {
					id,
					publicUrl,
				},
				event_3_text,
				event_4_image {
					id,
					publicUrl,
				},
				event_4_text,
				event_5_image {
					id,
					publicUrl,
				},
				event_5_text,
				event_6_image {
					id,
					publicUrl,
				},
				event_6_text,
				event_7_image {
					id,
					publicUrl,
				},
				event_7_text,
				event_8_image {
					id,
					publicUrl,
				},
				event_8_text
			}
		}
	`, {
		"routePath": routePath,
	}),
};
