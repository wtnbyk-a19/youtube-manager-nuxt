export default ({$axios, app}) => {
    $axios.onRequest(config => {
        const token = app.$cookies.get('jwt_token');
        If (token) {
            config.headers.common['Authorization'] = `Beare ${token}`
        } 
    })
}