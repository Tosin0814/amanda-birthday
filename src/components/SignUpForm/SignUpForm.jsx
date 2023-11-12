import './SignupForm.css'
import { useState } from 'react';
import { signUp } from '../../utilities/services/users'
import { useNavigate } from 'react-router-dom';

const defaultState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
}

export default function SignupForm({ updateUser }){
    const [formData, setFormData] = useState(defaultState)
    const navigate = useNavigate()
    const handleSubmit = async (evt) =>{
        evt.preventDefault();
        try{
            const data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }
            console.log(data)
            // const user = await signUp(data)
            // updateUser(user)
            // navigate('/')
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Sign up Failed - Try again!'
            })
        }
    }

    function handleChange(evt) {
        const newFormData = {
            ...formData, 
            [evt.target.name]: evt.target.value, 
            error: ''
        };
        setFormData(newFormData);
    }

    const disabled = (formData.password !== formData.confirm) || !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirm

    return <div className='SignupForm'>
            <div className="form-container">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className='mb-3'>
                        <label htmlFor="firstName" className='form-label'>First Name</label>
                        <input className='form-control' type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="lastName" className='form-label'>Last Name</label>
                        <input className='form-control' type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input className='form-control' type="text" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input className='form-control' type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="confirm" className='form-label'>Confirm Password</label>
                        <input className='form-control' type="password" name="confirm" id="confirm" value={formData.confirm} onChange={handleChange} required />
                    </div>
                    <button className='btn btn-primary' type="submit" disabled={disabled}>Sign up</button>
                </form>
            </div>
            {formData.error && <p className="error-message">&nbsp;{formData.error}</p>}
        </div>
}