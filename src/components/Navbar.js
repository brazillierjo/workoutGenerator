import { Link } from "react-router-dom";
import { useState } from "react";

export default function Example() {
    const [homeIsActive, setHomeIsActive] = useState(true);
    const [listIsActive, setListIsActive] = useState(false);
    return (
        <nav className="flex justify-between bg-red-700 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <Link className="flex" to={"/"}>
                    <span className="text-xl uppercase tracking-tight">My workout</span>
                </Link>
            </div>
            <div className="w-full text-white">
                <div className="flex justify-end lg:justify-start space-x-6">
                    {listIsActive ? <Link className="border-r-2 border-white" to={"/"}>
                        <button onClick={() => {
                            setHomeIsActive(true)
                            setListIsActive(false)
                        }}
                            className="mr-5 py-1 text-xl text-white">
                            🏠
                        </button>
                    </Link> : null}
                    {homeIsActive ? <Link className="text-sm border-r-2 border-white" to={"/list"}>
                        <button onClick={() => {
                            setHomeIsActive(false)
                            setListIsActive(true)
                        }}
                            className="mr-5 py-1 text-xl text-white">
                            📝 
                        </button>
                    </Link> : null}
                    <Link to={"/infos"}>
                        <button className="py-1 text-xl text-white">
                            ℹ️
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
