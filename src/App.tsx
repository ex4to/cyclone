import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { RootPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [],
  },
])

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
