import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import Route from "./component/Route";
import Sidebar from "./component/Sidebar";
// import Link from "./component/Link";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
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

