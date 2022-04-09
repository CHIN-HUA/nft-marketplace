import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


function NavBar(){
    return(
        <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Assets
            </a>
          </Link>
          <Link href="/create-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
          <DropdownMenu.Root>

            <DropdownMenu.Trigger>
              <div className="mr-6 text-pink-500">
                user
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>

              <DropdownMenu.Item>
                <Link href="/user">
                  <a className="mr-6 text-pink-500">
                    My NFTS
                  </a>
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>Setting</DropdownMenu.Item>

              <DropdownMenu.Item>Logout</DropdownMenu.Item>

            </DropdownMenu.Content>

          </DropdownMenu.Root>
        </div>
      </nav>
    )
}

export default NavBar