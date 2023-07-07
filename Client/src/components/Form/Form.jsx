import { useState } from 'react';
import validation from '../Validation/Validation';
import styles from './Form.module.css'

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })


    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
        <div className={styles.loginBox}>
            <form onSubmit={handleSubmit}>
                <img src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/YHAUBUYW75FZVLG4Z4WL5S6LMY.jpg" alt="" />    
                <h1 className={styles.h1}>Login</h1>

                {/*Correo electronico */}
                <div className={styles.inputBox}>
                    <span className={styles.icon}>
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="text" name='email' value={userData.email} onChange={handleChange} required/>
                    <label htmlFor="email">Email:</label>
                    {errors.email && <p>{errors.email}</p>}   
                </div>

                {/*Correo electronico */}
                <div className={styles.inputBox}>
                    <span className={styles.icon}>
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" name='password' value={userData.password} onChange={handleChange} required/>
                    <label htmlFor="password">Password:</label>
                    {errors.password && <p>{errors.password}</p>}   
                </div>

                
                {/*Boton SUMBIT */}
                        
                
                <button type="submit" className={styles.neon}>Login
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                </button>
                


            </form>
        </div>
    )
}

export default Form;