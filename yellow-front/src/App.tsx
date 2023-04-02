import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import AuthProvider from "./context/RegisterContext";
import UserProvider from "./context/UserContext";
import ContactProvider from "./context/ContactContext";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <UserProvider>
        <ContactProvider>
          <GlobalStyle />
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
