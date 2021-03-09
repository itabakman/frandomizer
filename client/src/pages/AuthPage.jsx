import React, { useState,useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import './../App.css'
import kosti from './../images/kosti.png'

export const AuthPage = () => {
    const message = useMessage()


    const auth = useContext(AuthContext)
    const {loading,request,error,clearError} =useHttp()
    const [form,setForm]=useState({
        email:'',
        password:''
    })

    useEffect( ()=>{
    message(error)
    clearError()
    },[error, message,clearError])




    const changeHandler = event => {
        setForm({...form,[event.target.name]:event.target.value})
    }
    

    const registerHandler = async () =>{

        try {
            
        const data = await request ('/api/auth/register','POST',{...form})
        message(data.message)
        } catch (e) {}


    }
    const loginHandler = async () =>{

        try {
            
        const data = await request ('/api/auth/login','POST',{...form})
        auth.login(data.token,data.userId)
        } catch (e) {}


    }
    
    return (
        <div className="row ">
            <div className="col s6 offset-s3">
                <div className="logoName">RANDOMIZER <img src={kosti} width='50px' height='50px'></img></div>
                <div className="card tabColor">
                    <div className="card-content black-text">
                        <span className="card-title center">Авторизация</span>
                    </div>
                    <div>
                        <div class="input-field inputTab ">
                            <input 
                            placeholder="Введите email" 
                            id="email" 
                            type="text"
                            name="email" 
                            onChange={changeHandler}
                            />
                            <label className="inputTab" Htmlfor="email">Email</label>
                        </div>
                        <div class="input-field inputTab ">
                            <input 
                            placeholder="Введите пароль" 
                            id="password" 
                            type="password" 
                            name="password"
                            onChange={changeHandler}
                            />
                            <label className="inputTab" Htmlfor="password">Пароль</label>
                        </div>


                    </div>

                    <div className="card-action center">
                        <button className="btn" onClick={loginHandler} disabled={loading}>Войти</button>
                        <button className="btn" onClick={registerHandler } disabled={loading} >Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
