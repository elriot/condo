import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import Route from "./component/Route";
import Sidebar from "./component/Sidebar";
import UsersListPage from "./pages/UsersListPage";

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
                <Route path="/userslist">
                    <UsersListPage></UsersListPage>
                </Route>
            </div>
        </div>
    )
}
export default App;

