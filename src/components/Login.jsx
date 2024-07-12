import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md px-8 py-10 bg-gray-800 shadow-lg rounded-lg">
                <div className="mb-8 flex justify-center">
                    <Logo width="80px" className="text-blue-400" />
                </div>
                <h2 className="text-center text-3xl font-semibold text-gray-100 mb-4">Sign in to your account</h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="space-y-6">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address",
                            },
                        })}
                        error={errors.email}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { 
                            required: "Password is required" 
                        })}
                        error={errors.password}
                    />
                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login