
function UserInterface() {
    return (
        <>
        <div>
            {/* <h3>wallet connected: {address}</h3> */}
            <div>
            &nbsp;&nbsp;
            <Link href="/create-item">
                <a className="mr-4 text-pink-500">
                    On sale
                </a>
            </Link>
            <button>Items</button>
            &nbsp;&nbsp;
            <button>Offers</button>
            &nbsp;&nbsp;
            <a className="mr-6 text-pink-500">
            Activities
            </a>
            </div>
        </div>
        <div>

        </div>
        </>
        )
}
export default UserInterface