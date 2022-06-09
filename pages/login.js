import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Login(){
    const [a, change] = useState(1);
    if(a==0)    
    return(
        <>
        <Link href="/wallet">
            <a className="mr-6 text-pink-500">
                Login
            </a>
        </Link>
        </>
    )
    if(a==1)
    return(
        <>
        

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
          </>
    )
}
export default Login