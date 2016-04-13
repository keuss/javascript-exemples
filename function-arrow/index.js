const route = (url) => {
	return (param) => url + '/' + param
}
// google.fr/yo
console.log(route('google.fr')('yo'))
