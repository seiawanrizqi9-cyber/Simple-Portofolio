export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
            <div>
                <h1 className="text-xl font-bold text-gray-800">DevPortofolio</h1>
            </div>
            <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    <a href="#">Hire Me!</a>
                </button>
            </div>
        </header>
    )
}