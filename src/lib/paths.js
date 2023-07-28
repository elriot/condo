export function getServerPath(pathName = ""){
    let server = 'http://localhost:3005';
    if(pathName !== ""){
        server += '/' + pathName;
    }
    return server;
}