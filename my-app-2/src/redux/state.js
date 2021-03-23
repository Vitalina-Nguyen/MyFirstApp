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
        myMassages: [
            { id: 1, massage: 'Great' },
            { id: 2, massage: 'Yo'}
        ],
        friendMassages: [
            { id: 1, massage: "Hi! What's up?" },
            { id: 2, massage: 'Yo' }
        ]
    }

}

export default state;