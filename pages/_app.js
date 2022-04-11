import '../styles/globals.css'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import NavBar from './navbar';

function MyApp({ Component, pageProps }) {
  async function drop(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp