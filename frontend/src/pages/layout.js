import { Outlet } from 'react-router-dom'

export function Layout() {

    return (
        <>
            <div className='page'>
                <header>
                   <p>URL Shortener   <i>Create, share, and shorten URLs</i></p>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <p>(c) 2026 Jack Miller</p>
                    <p><a href='https://github.com/millerjw2000' target="_blank">GitHub Account</a></p>
                    <p><a href='https://github.com/millerjw2000/url_shortener' target="_blank">Project repository</a></p>
                </footer>
            </div>
        </>
    )
}