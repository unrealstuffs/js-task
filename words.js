const removeDoubles = string => {
	const result = [...new Set(string.split(','))]

	return result.join()
}

console.log(
	removeDoubles('кошка,собака,собака,собака,лошадь,корова,кошка,корова')
)
