import React, {useState} from 'react'

function Dashboard() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('currentUser')) || []);
    return (
        <div className=" bg-gray-100 p-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-600 text-sm">Full Name</p>
                        <p className="text-xl font-semibold text-gray-800">{users.fullname || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">Email</p>
                        <p className="text-xl font-semibold text-gray-800">{users.email || 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
