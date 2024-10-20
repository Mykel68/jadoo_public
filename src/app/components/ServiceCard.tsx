import React from 'react'

export default function ServiceCard({ icon, title, description }: any) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="mb-4 bg-blue-100 p-3 rounded-full">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a0b4b]">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}
