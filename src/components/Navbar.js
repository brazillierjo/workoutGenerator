import { Link } from "react-router-dom"

export default function Example() {
    return (
        <nav className="flex justify-between bg-teal-500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">My workout</span>
            </div>
            <div className="w-full text-white">
                <div className="flex justify-end lg:justify-start space-x-6">
                    <Link className="text-2xl" to={'/'}>
                        🏠
                    </Link>
                    <Link className="text-2xl" to={'/list'}>
                        📝
                    </Link>
                    <Link className="text-2xl" to={'/about'}>
                        ℹ️
                    </Link>
                </div>
            </div>
        </nav>
    )
}
