import { Link } from "react-router-dom";
import { useState } from "react";

export default function Example() {
    const [homeIsActive, setHomeIsActive] = useState(true);
    const [listIsActive, setListIsActive] = useState(false);
    return (
        <nav className="flex justify-between bg-black p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <Link className="flex" to={"/"}>
                    <span className="text-xl uppercase tracking-tight">My workout</span>
                </Link>
            </div>
            <div className="w-full text-white">
                <div className="flex justify-end lg:justify-start space-x-6">
                    {listIsActive ? <Link to={"/"}>
                        <button onClick={() => {
                            setHomeIsActive(true)
                            setListIsActive(false)
                        }}
                            className="bg-white shadow-2xl px-2 py-1 rounded-xl text-md text-black">
                            Retour à l'accueil
                        </button>
                    </Link> : null}
                    {homeIsActive ? <Link className="text-sm" to={"/list"}>
                        <button onClick={() => {
                            setHomeIsActive(false)
                            setListIsActive(true)
                        }}
                            className="bg-white shadow-2xl px-2 py-1 rounded-xl text-md text-black">
                            Voir la liste des exercices
                        </button>
                    </Link> : null}
                    <Link to={"/infos"}>
                        <button className="bg-white shadow-2xl px-2 py-1 rounded-xl text-md text-black">
                            ℹ️
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
