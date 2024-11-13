export default defineNuxtRouteMiddleware((to) => {
	const router = useRouter()
	const routes = router.getRoutes()

	const existingRoute = routes.some((route) => {
		const pattern = route.path.replace(/:\w+\(\)/g, '[^/]+').replace(/:\w+/g, '[^/]+')
		const regex = new RegExp(`^${pattern}$`)
		return regex.test(to.path)
	})

	if (to.path !== '/' && !existingRoute) {
		return navigateTo('/')
	}
})
