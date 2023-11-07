import { Fragment } from 'react'
import { Routes, Route} from 'react-router-dom'
import { ListRoutes } from './routes/Routes'

function App() {

  return (
    <>
        <Routes>
          {
            ListRoutes.map((route, index) => {
              const Layout = route.layout != null ? route.layout : Fragment
              const Page = route.component != null ? route.component : Fragment
              return (
                <Route key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })
          }
        </Routes>
    </>
  );
}

export default App;
