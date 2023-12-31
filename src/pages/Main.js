import { styled } from "styled-components";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import Content from "../components/Content";
import Profile from "../components/Profile";
const Main = () => {
  return (
    <>
      <MainWrap>
        <Sidebar />
        <MessageList />
        <Content />
        <Profile />
      </MainWrap>
    </>
  );
};

const MainWrap = styled.div`
  width: 1470px;
  height: 900px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.GRAY};
`;
export default Main;
