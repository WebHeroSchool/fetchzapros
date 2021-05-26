fetch('https://api.github.com/users/foxx4')
.then(res => res.json())
.then(json => console.log(json.avatar_url))
.catch(err => console.log(err));

fetch('https://api.github.com/users/foxx4')
.then(res => res.json())
.then(json => console.log(json.bio))
.catch(err => console.log(err));

fetch('https://api.github.com/users/foxx4')
.then(res => res.json())
.then(json => console.log(json.html_url))
.catch(err => console.log(err));


fetch('https://api.github.com/?username=foxx4')
.then(res => res.json())
.then(json => console.log(json.name))
.catch(err => console.log(err));


