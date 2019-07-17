import React, { Component } from 'react';
import '../../App.css';

export default class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="login-header">LOGIN</div>

                <div class="page">
                    <div class="page__demo">
                        <label class="field a-field a-field_a1 page__field">
                            <input class="field__input a-field__input" placeholder="e.g. Stanislav" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">First name</span>
                            </span>
                        </label>
                        <br></br>
                        <label class="field a-field a-field_a2 page__field">
                            <input class="field__input a-field__input" placeholder="e.g. Melnikov" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">Last name</span>
                            </span>
                        </label>
                        <br></br>
                        <label class="field a-field a-field_a3 page__field">
                            <input class="field__input a-field__input" placeholder="e.g. melnik909@ya.ru" required></input>
                            <span class="a-field__label-wrap">
                                <span class="a-field__label">E-mail</span>
                            </span>
                        </label>
                    </div>
                </div>
                
            </div>
        )
    }
}