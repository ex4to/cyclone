import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { RootPage, SearchPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [],
  },
  {
    path: '/search',
    element: <SearchPage />,
    children: [],
  },
  {
    path: '/:cityUrl',
    element: <RootPage />,
    children: [],
  }
])

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
