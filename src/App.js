import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import {QueryClientProvider,QueryClient} from "react-query"
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { ReactQueryDevtools } from 'react-query/devtools'
import { TestHeroesPage } from './components/TestHeroes.page'
import { RQSuperHeroPage } from './components/RQSuperHero.page'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/test-heroes'>Test-Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage/>}/>
            <Route path='/super-heroes'element={<SuperHeroesPage/>}/>          
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
            <Route path='/test-heroes'element={<TestHeroesPage />}/>
            <Route path='/'element={<HomePage />}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App