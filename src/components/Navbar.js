import { Link } from "react-router-dom"
import dumbell from '../data/dumbell.png'

export default function Example() {
    return (
        <nav className="flex justify-between bg-teal-500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <img className="w-8 mr-2" src={dumbell} alt="dumbell" />
                <span className="text-xl uppercase tracking-tight">My workout</span>
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
