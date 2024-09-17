import { TextField, Button } from "@mui/material"
import classes from './Login.module.scss'
import { useState } from "react"

interface LoginData{
    userName: LoginValue
    phoneNumber:LoginValue
    [key: string] :LoginValue
}

interface LoginValue {
    value :string
    pattern: RegExp
    error : boolean

}

export const Login = () => {

    const [loginData, setLoginData] = useState<LoginData>({
        userName: {
            value : '',
            pattern : /\w{4,16}/,
            error : false,
        },
        phoneNumber: {
            value : '',
            pattern : /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/,
            error : false,
        }
    })


    
    const handleUpLoginData = (key :string , type:string , value: string | boolean) =>{
        setLoginData(prev => (
            {
                ...prev , [key] : {
                    ...prev[key],
                    [type]:value
                }
            }
        ))
    }

    const handleValidate = () => {
        let  result = false
        if (!loginData.userName.pattern.test(loginData.userName.value)){
            handleUpLoginData('userName','error',true)
            result=true
        }
        if (!loginData.phoneNumber.pattern.test(loginData.phoneNumber.value)){
            handleUpLoginData('phoneNumber','error',true)
            result=true
        }
        return result
    }
    const handleAddUser = () => {
        handleValidate()
            if (!handleValidate()){
                localStorage.setItem('user',JSON.stringify(loginData))
                window.location.reload()
            }
        // localStorage.setItem('user', JSON.stringify(loginData))
        // window.location.reload()
    }


    return (
        <div className={classes.wrapper}>
            <p>Login</p>
            <div className={classes.inputWrapper}> 
                <div>
                <TextField 
                className={classes.input}
                onChange={(e) => {
                    handleUpLoginData('userName','value',e.target.value)
                    handleUpLoginData('userName','error',false)
                }} error={loginData.userName.error} variant="filled" label="username"/>
                {loginData.userName.error ? <p className={classes.errorText}>Введите больше 4 и меньше 16 символов</p> : <></>}
                </div>
                </div>
                <div>
                <TextField className={classes.input}
                onChange={(e) => {
                    handleUpLoginData('phoneNumber','value',e.target.value)
                    handleUpLoginData('userName','error',false)
                }} error={loginData.phoneNumber.error} variant="filled" label="phone number"/>
                {loginData.phoneNumber.error ? <p className={classes.errorText}> Введите телефон в формате +996 XXX XX-XX-XX </p> : <></>}
            </div>
            <Button variant="contained" onClick={() => handleAddUser()}>Login</Button>
        </div>
    )
}