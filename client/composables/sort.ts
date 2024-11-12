const sortLaunches = (data: any, sort: string) => {
	const sortLaunches = data._value.sort((a: any, b: any) => {
		if (sort === 'asc') {
			// @ts-ignore
			return new Date(a.launch_date_local) - new Date(b.launch_date_local)
		} else {
			// @ts-ignore
			return new Date(b.launch_date_local) - new Date(a.launch_date_local)
		}
	})
	return sortLaunches
}

export default sortLaunches
