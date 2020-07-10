const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur expedita ullam sit totam ut nam eius repudiandae tenetur aut fugit sequi rem inventore numquam necessitatibus adipisci, enim officiis debitis autem dolor a quis voluptas earum. Ad repellendus molestiae asperiores explicabo expedita distinctio minus repudiandae.'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur expedita ullam sit totam ut nam eius repudiandae tenetur aut fugit sequi rem inventore numquam necessitatibus adipisci, enim officiis debitis autem dolor a quis voluptas earum. Ad repellendus molestiae asperiores explicabo expedita distinctio minus repudiandae.'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur expedita ullam sit totam ut nam eius repudiandae tenetur aut fugit sequi rem inventore numquam necessitatibus adipisci, enim officiis debitis autem dolor a quis voluptas earum. Ad repellendus molestiae asperiores explicabo expedita distinctio minus repudiandae.'},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}

export default rootReducer