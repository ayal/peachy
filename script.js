console.log(location.host);

if (!location.host.match('peach')) {
    console.log('redirecting...');
    location.href = 'http://ayal.github.io/peachy'
}
