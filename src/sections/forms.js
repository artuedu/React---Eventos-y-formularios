import React, { Component } from 'react';

export default class Forms extends Component {

    constructor(){
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value;
        const email = document.getElementById('twitter').value;
        console.log({name, email});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    handleChange = (e) => {
        console.log('handleChange');
        console.log(e.target.checked);
        this.setState({inputTerms: e.target.checked});
    }
    
    render(){
        return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input 
                            id="name" 
                            name="userName" 
                            onChange={e => this.setState({inputName: e.target.value})}
                            placeholder="Introduce el nombre" 
                            ref={inputElement => this.inputName = inputElement} 
                            value={this.state.inputName}
                        />
                    </p>
                    <p>
                        <label htmlFor="twitter">Twitter: </label>
                        <input 
                            id="twitter" 
                            name="twitterAccount" 
                            onChange={e => this.setState({inputTwitter: e.target.value})}
                            placeholder="Introduce tu twitter" 
                            value={this.state.inputTwitter}
                        />
                    </p>
                    <p>
                        <label htmlFor="terms">
                            <input 
                            type="checkbox" 
                            onChange={this.handleChange} 
                            checked={this.state.inputTerms}
                        />
                            Accepted terms
                        </label>
                    </p>
                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}
