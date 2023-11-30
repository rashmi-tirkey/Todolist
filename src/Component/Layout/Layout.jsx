
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <nav className="Layout">
                <ul>
                    <li>
                        <Link to="/todolist">Todolist</Link>
                    </li>
                    <li>
                        <Link to="/stopwatch">Stopwatch</Link>
                    </li>
                    <li>
                        <Link to="/cart">AddToCart</Link>
                    </li>
                    <li>
                        <Link to="/namastyreact">Namasty React</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Layout;