import ChatPage from "../pages/ChatPage/ChatPage";
import ChatBox from "../pages/ChatPage/components/ChatBox/ChatBox";
import LoginPage from "../pages/LoginPage/LoginPage";

export const userRoute = [
    // Nơi chứa các đường dẫn của các trang
    {
        path: '/login',
        component: <LoginPage />
    },
    {
        path: '/chatbox/:id',
        component: <ChatPage Component={ChatBox} />
    },
]