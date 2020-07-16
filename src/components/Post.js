import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {

    state = {
        pokeball: null
    }

    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(res => {
            this.setState({
                pokeball: res.data
            })
        })
    }

    render() {

        const pokeball = this.state.pokeball ? (
            <div className="post">
                <h4 className="tituloPoke center">{this.state.pokeball.name}</h4>
            </div>
        ) : (
            <div className="center">Loading Pokemon...</div>
        )
        
        return (
            <div className="container post">
                <Link to="/">
                    <button className="botonPokemon">Go to Home</button>
                </Link>
                <div className="container post center">
                    { pokeball }
                </div>
            </div>
        )
    }
}

export default Post