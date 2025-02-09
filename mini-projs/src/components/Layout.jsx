import { NavLink } from 'react-router-dom';
import useTheme from '../context/ThemeContext';


//navlink got isActive callback function that determines the active state of curr navbar button
function Layout({ children }) {


    const { themeMode, toggleTheme } = useTheme();
    console.log(themeMode)

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className='flex items-center justify-center w-full p-3 mx-auto bg-pink-100'>
                <p className='text-center'>Limited Edition Sale . 50% off {"    "}</p>
                <button className='p-2 ml-5 bg-white rounded-2xl' onClick={toggleTheme}>Toggle</button>
                <p className='ml-5 text-center'>Current Mode : {themeMode}</p>
            </div>
            <header className="p-4 text-white bg-blue-600">
                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4"}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/colorPage"
                        className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4"}
                        end
                    >
                        Color page
                    </NavLink>
                    <NavLink
                        to="/progressBar"
                        className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4"}
                        end
                    >
                        ProgressBar
                    </NavLink>
                    <NavLink
                        to="/password-generator"
                        className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4"}
                    >
                        Password Generator
                    </NavLink>
                    <NavLink
                        to="/currency-converter"
                        className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4"}
                    >
                        Currency Converter
                    </NavLink>
                    <NavLink
                        to="/searchbar"
                        className={({ isActive }) => isActive ? "mr-4 text-yellow-500" : "mr-4"}
                    >
                        SearchBar
                    </NavLink>
                </nav>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="p-4 text-center text-white bg-blue-600">
                Footer Content
            </footer>
        </div>
    );
}

export default Layout;
