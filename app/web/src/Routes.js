// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PublicLayout from 'src/layouts/PublicLayout/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PublicLayout}>
      <Route path="/cart" page={CartPage} name="cart" />
      <Route path="/product" page={ProductPage} name="product" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes