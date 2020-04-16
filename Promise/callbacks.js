const posts = [
    {title:"Post1",body:"this is post1"},
    {title:"Post2",body:"this is post2"}
]

function getPosts() {
    setTimeout( () => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

getPosts();
console.log("test")
