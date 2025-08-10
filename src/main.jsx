
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './RootLayout/Root'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes'

createRoot(document.getElementById('root')).render(
  <div className='libertinus'>
    <RouterProvider router={router}>
      <Root/>
  </RouterProvider>
  </div>
  

)
