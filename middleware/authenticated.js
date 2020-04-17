export default function ({ store, route, redirect }) {
    if (!store.getters['auth/isAuthenticated']) {
        if (!route.path.includes('/auth/signin')) {
            return redirect('/auth/signin')
        }
    }
}
