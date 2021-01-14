export function registe(moduleName, cb) {
    cb().then(Module => {
        modules[moduleName] = new Module();
    })
}