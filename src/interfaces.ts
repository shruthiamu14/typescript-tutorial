//interfaces

interface Author {
    name: string;
    email: string;
    website: string;
}
const authorOne: Author = { name: 'John', email: 'jhon@gmail.com', website: 'john.com' }

interface Post {
    title: string;
    body: string;
    published: Date;
    tags: string[];
    author: Author;
}
const newPost: Post = { 
    title: 'My Post',
    body: 'This is my first post',
    published: new Date(),
    tags: ['blog', 'new'],
    author: authorOne
}

// as function argument type

function createPost(post: Post): void {
    console.log(`created post ${post.title} by ${post.author.name}`)
}
createPost(newPost)

// with arrays
let posts: Post[] = []
posts.push(newPost)
