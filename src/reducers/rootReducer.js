// import Redux from 'redux';

const initState = {
    posts: [
        {id: '1', title: 'Squirtle laid a Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora ex officia quas ea recusandae cumque incidunt accusamus consequuntur, eaque,'},
        {id: '2', title: 'Charmander laid a Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora ex officia quas ea recusandae cumque incidunt accusamus consequuntur, eaque,'},
        {id: '3', title: 'A Helix fossil was found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora ex officia quas ea recusandae cumque incidunt accusamus consequuntur, eaque,'}
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

export default rootReducer;