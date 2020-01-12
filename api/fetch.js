import fetch from 'isomorphic-unfetch'

export default async (query = '', variables = {}) => {

	const res = await fetch('http://cms.abbeyleisuregroup.com/admin/api/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({query: query, variables: variables }),
	});

	if (res.status === 200) {
		const json = await res.json();
		return json.data;
	}
	return { status: res.status, statusText: res.statusText, body: res.body }
}
