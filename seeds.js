const faker = require('faker');
const Post = require('./models/post');

async function seedPosts(){
    await Post.deleteMany({});
    for(const i of new Array(40)){
        const post = {
            title: faker.lorem.word(),
            description: faker.lorem.text(),
            author: {
                '_id' : '5ea2af08e56a5f3c240a38fb',
                'username' : 'Shoeb'
            }
        }
        await Post.create(post);
    }
    console.log('40 new posts created')
}

module.exports = seedPosts;