
export default function Register() {
    return  (
        <div className="bg-blue-50 h-screen">
            <form className="w-64 mx-auto">
                <input type="text" placeholder="username" className="block w-full" />
                <input type="password" placeholder="password" className="block w-full" />
            </form>
        </div>
    );
}