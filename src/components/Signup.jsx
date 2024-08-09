import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../store/authSlice'
import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index.js'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
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
                <h2 className="text-center text-3xl font-semibold text-gray-100 mb-4">Create an account</h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit(create)} className="space-y-6">
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name", { required: "Full name is required" })}
                        error={errors.name}
                    />
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
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                        })}
                        error={errors.password}
                    />
                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Signup