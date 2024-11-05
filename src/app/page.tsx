export default function HomePage( {
    register,
    login,
}: {
    children: React.ReactNode;
    register: React.ReactNode;
    login: React.ReactNode;
} ) {
    return (
        <>
            <header>
                <h1>Welcome to My App</h1>
            </header>

            <main>
                <aside>{register}</aside>
                <aside>{login}</aside>
            </main>
        </>

    );
}
