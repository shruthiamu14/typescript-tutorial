"use strict";
//interfaces
const authorOne = { name: 'John', email: 'jhon@gmail.com', website: 'john.com' };
const newPost = {
    title: 'My Post',
    body: 'This is my first post',
    published: new Date(),
    tags: ['blog', 'new'],
    author: authorOne
};
// as function argument type
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
