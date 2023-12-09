import './LoginForm.css'
import { useState } from 'react';
import { login } from '../../utilities/services/users'
import { useNavigate } from 'react-router-dom';

const defaultState = {
    email: '',
    password: '',
    error: ''
}

export default function LoginForm({ updateUser }) {
    const [formData, setFormData] = useState(defaultState)
    const navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const data = {
            email: formData.email,
            password: formData.password
        }
        try {
            const user = await login(data)
            updateUser(user)
            navigate('/')
        } catch (err) {
            setFormData({
                ...formData,
                error: 'Log in Failed - Try again!'
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

    const disabled = !formData.email || !formData.password

    return <div className='LoginForm'>
        <div className="form-container">
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className='mb-3'>
                    <label className='form-label' htmlFor="login-email">Email</label>
                    <input className='form-control' type="text" name="email" id="login-email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="login-password">Password</label>
                    <input className='form-control' type="password" name="password" id="login-password" value={formData.password} onChange={handleChange} required />
                </div>
                <button className='btn btn-primary' type="submit" disabled={disabled}>Log In</button>
            </form>
        </div>
        {formData.error && <p className="error-message">&nbsp;{formData.error}</p>}
    </div>
}