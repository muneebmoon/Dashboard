import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function Input({ placeholder, type = "text", name, id, ...props }) {

    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === "password"

    return (
        <div className="relative w-full">

            <input
                type={isPassword ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                name={name}
                id={id}
                className="w-full p-3 pr-12 font-medium border border-gray-300 rounded-xl bg-[#F7FAFC] focus:outline-none focus:ring-1 focus:ring-[#CBD5E0]"
                {...props}
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            )}

        </div>
    )
}

export default Input
