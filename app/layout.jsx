import Provider from '@/components/Provider'
import Nav from '@/components/Nav'
import '@/styles/globals.css'

export const metadata = {
    title: 'PromptShare',
    description: 'Share your prompts with the world',
  }

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className="main">
                <div className='gradient'/>
            </div>
            <main className="app">
            <Nav />
            {children}
            </main>
            </Provider>
        </body>
    </html>
  )

}

export default RootLayout