import Link from 'next/link';

function Home() {
    return (<div>
        <title>RedRage</title>
        
        <h1>RedRage</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>)
}

export default Home