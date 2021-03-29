import {rerenderEntireTree} from './../render'

let state = {
    profilePage: {
        posts: [
            { id: 1, post: 'I love you', likeCount: 15 },
            { id: 2, post: 'Follow me', likeCount: 11 }
        ]
    },
      dialogsPage: {
        dialogs: [
            { id: 1, name: 'Viktor' },
            { id: 2, name: 'July' },
            { id: 3, name: 'Kate' },
            { id: 4, name: 'Nasty' },
            { id: 5, name: 'Irina' }
        ],

        messages: [
            { id: 1, message: 'Great' },
            { id: 2, message: 'Yo'},
            { id: 3, message: "Hi! What's up?" },
            { id: 4, message: 'Yo' }
        ],
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likeCount: 5
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);   
}

export default state;