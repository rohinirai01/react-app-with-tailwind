import { useDispatch, useSelector } from "react-redux/es/exports";

import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Shop from "./components/Shop";

function App() {
    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return ( <
            div > { /* {products.map(product => <div key={product.id}>{product.name} - {product.price}</div>)} */ } { /* {users.map(user => <div key={user.id}>{user.name} - {user.email}</div>)}  */ }

            <
            Router > {
                users.map(user => < div key = { user.id } > { user.name } - { user.email } < /div>)} 

                    {
                        /* {
                                user
                                ? <input type="button" value="logout" onClick={() => {
                                  dispatch({
                                    type: "LOGOUT"
                                  })
                                }} />
                                : <Login></Login>
                                  
                              } */
                    }

                    <
                    div className = "container" >
                    <
                    Routes >
                    <
                    Route path = "/"
                    element = { < Login / > } > < /Route> <
                    Route path = "/reg"
                    element = { < Registration / > } > < /Route> <
                    Route path = "/shop"
                    element = { < Shop / > } > < /Route> <
                    /Routes> <
                    /div>

                    <
                    /Router>

                    <
                    /div>
                );
            }
            export default App;