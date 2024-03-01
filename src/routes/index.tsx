import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { About } from '../pages/about'
import { LayoutDefault } from '../layouts/layoutDefault'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
