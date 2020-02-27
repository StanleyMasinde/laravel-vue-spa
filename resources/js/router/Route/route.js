class Route {
    /**
     * 
     * @param {*} path 
     * @param {*} name 
     * @param {*} component 
     * @param {*} meta 
     */
    get(path, name, component, meta = {}) {
        // let resolvePath = () => import(/* webpackChunkName: 'views/view' */ `${viewPath}/${component.replace('.','/')}.vue`)
        return {
            path: path,
            name: name,
            component: () => import(/* webpackChunkName: 'views/view' */`../../../views/${component.replace('.', '/')}.vue`).then(module => module).catch(err => console.log(err)),
            meta: meta
        }
    }
}


export default Route
