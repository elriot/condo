import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import Route from "./component/Route";
import Sidebar from "./component/Sidebar";
// import Link from "./component/Link";

function App() {
    return (
        <div>
            <Sidebar></Sidebar>
            {/* <Link to="/main">**Go To Main**</Link>
            <Link to="/signup">**Go To Signup**</Link> */}
            <div>
                <Route path="/">
                    <MainPage></MainPage>
                </Route>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>
            </div>
        </div>
    )
}
export default App;

