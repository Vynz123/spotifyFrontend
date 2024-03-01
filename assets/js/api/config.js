export var uri;
if (location.hostname === "localhost") {
        uri = "http://localhost:5500";
} else if (location.hostname === "127.0.0.1") {
        uri = "http://127.0.0.1:5500";
} else {
        uri = "http://localhost:5500";
}

export const options = {
    method: 'GET', 
    mode: 'cors', 
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
};