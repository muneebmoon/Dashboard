import React from 'react'

function Footer() {
    return (
        <>
        <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <p className="text-gray-400">Hello.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Dashboard. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
