import { Footer, Header } from "./components/base"
import Blogs from "./components/blogs";
import BlogDetail from "./components/blogDetail";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
    return ( 
        <Router>
            <Header />
                <Switch>
                    <Route path="/" exact>
                         <Blogs /> 
                    </Route>
                    <Route path="/blogdetail/:slug">
                         <BlogDetail /> 
                    </Route>
                </Switch>
            <Footer />
        </Router>
     );
}
 
export default App;