import { styled } from "styled-components";
import Clogo from "../assets/icons/clogo.png";
import Kuromi from "../assets/images/kuromi.png";
import Pikachu from "../assets/images/pikachu.png";
import Kirby from "../assets/images/kirby.png";
import Seven from "../assets/images/seven.png";
import Face from "../assets/icons/face.png";
import More from "../assets/icons/more.png";
import Call from "../assets/icons/call.png";
import Send from "../assets/icons/send.png";
import dummy from "../assets/data/msgListData.json";
import { useRef, useEffect, useState } from "react";

const Content = () => {
  const monthNames = [
    "Jan",
    "Fab",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [content, setContent] = useState("");
  const date = new Date();
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  const contentChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };
  return (
    <>
      <ContentWrap>
        <ContentHeader>
          <HeaderProfile src={Clogo} />
          <HeaderMsg>
            <h1>Ahyeong Studio</h1>
            <p>We are the one</p>
          </HeaderMsg>
          <HeaderImgWrap>
            <HeaderImg src={Kuromi} />
            <HeaderImg src={Pikachu} style={{ left: "150px" }} />
            <HeaderImg src={Kirby} style={{ left: "165px" }} />
            <HeaderImg
              src={Seven}
              style={{ left: "180px", padding: "7px 10px 7px 10px" }}
            />
          </HeaderImgWrap>
          <HeaderIconWrap>
            <HeaderLastImg src={Face} />
            <HeaderLastImg src={Call} />
            <HeaderLastImg src={More} />
          </HeaderIconWrap>
        </ContentHeader>
        <ContentBox ref={scrollRef}>
          <DateView>
            <p>{`Today, ${monthNames[date.getMonth()]} ${date.getDay()}`}</p>
          </DateView>
          {dummy.Content.map((item, index) => {
            return (
              <ContentView>
                {item.isMine ? (
                  <MyMsg>
                    <MsgHeader>
                      <MyProfile src={item.profile} />
                      <MyName>You</MyName>
                      <MyMsgTime>{item.time}</MyMsgTime>
                    </MsgHeader>
                    <MyMsgBox>
                      <MyMsgBoxP>{item.content.text}</MyMsgBoxP>
                    </MyMsgBox>
                  </MyMsg>
                ) : (
                  <GroupMsg>
                    <MsgHeader>
                      <MsgProfile src={item.profile} />
                      <MsgName>{item.name}</MsgName>
                      <MsgTime>{item.time}</MsgTime>
                    </MsgHeader>
                    <MsgBox>
                      <GroupView>
                        {item.content.hasLink && (
                          <MsgBoxP>
                            <ContentLink href="/">
                              {item.content.Link}
                            </ContentLink>
                          </MsgBoxP>
                        )}
                      </GroupView>
                      <GroupView>
                        {item.content.hasImage && (
                          <MsgBoxP>
                            <ContentImg src={item.content.image} />
                          </MsgBoxP>
                        )}
                      </GroupView>
                      <GroupView>
                        <MsgBoxP>{item.content.text}</MsgBoxP>
                      </GroupView>
                    </MsgBox>
                  </GroupMsg>
                )}
              </ContentView>
            );
          })}
        </ContentBox>
        <ContentForm>
          <FormWrap>
            <ContentInput
              name="content"
              value={content}
              placeholder="Type a message"
              onChange={contentChange}
            ></ContentInput>
            <InputIcon src={Face} style={{ marginRight: "5px" }} />
            <InputIcon src={Call} />
            <InputIcon src={More} />
          </FormWrap>
          <ContentBtn>
            <img src={Send} alt="sendIcon" />
          </ContentBtn>
        </ContentForm>
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  background-color: white;
  width: 600px;
  height: ${({ theme }) => theme.height};
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
`;
const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 70px;
`;
const HeaderProfile = styled.img`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.PINK};
  border-radius: 25px;
  padding: 5px;
  margin-right: 20px;
`;
const HeaderMsg = styled.div`
  h1 {
    font-weight: 900;
    padding-bottom: 5px;
  }
  p {
    text-align: left;
    color: ${({ theme }) => theme.colors.GREEN};
    font-size: 14px;
  }
`;
const HeaderImgWrap = styled.div`
  background-color: white;
  margin-left: 50px;
  position: relative;
`;
const HeaderImg = styled.img`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.PINK};
  border: 1px solid white;
  border-radius: 25px;
  top: -16px;
  left: 140px;
  height: 30px;
  width: 30px;
  padding: 5px;
`;
const HeaderIconWrap = styled.div`
  margin-left: auto;
`;
const HeaderLastImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  padding: 5px;
  margin-left: 3px;
  opacity: 0.5;
`;
const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.GRAY};
  height: 600px;
  border-radius: 10px;
  overflow: scroll;
`;
const DateView = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  p {
    width: 100px;
    height: 30px;
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    padding-top: 9px;
    font-size: 13px;
    font-weight: 600;
  }
`;
const ContentView = styled.div`
  display: flex;
  width: 480px;
  flex-direction: column;
`;
const GroupMsg = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  margin-bottom: 10px;
`;
const MsgProfile = styled.img`
  height: 40px;
  width: 40px;
  float: left;
  background-color: ${({ theme }) => theme.colors.PINK};
  border-radius: 25px;
  padding: 3px;
`;
const MsgName = styled.p`
  font-weight: 700;
  float: left;
  margin-left: 10px;
  padding-top: 5px;
`;
const MsgTime = styled.p`
  font-size: 13px;
  color: gray;
  padding-top: 7px;
  width: 100px;
  margin-left: 100px;
`;
const MsgBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const GroupView = styled.div`
  display: flex;
`;
const MsgBoxP = styled.p`
  margin-left: 40px;
  text-align: left;
  float: left;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;
const MsgHeader = styled.div`
  margin-right: 10px;
`;
const MyMsg = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
`;
const MyMsgTime = styled.p`
  font-size: 13px;
  color: gray;
  padding-top: 16px;
  width: 60px;
  float: right;
`;
const MyName = styled.p`
  font-weight: 700;
  float: right;
  margin: 0 12px 10px 20px;
  padding-top: 10px;
  font-size: 18px;
`;
const MyProfile = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  padding: 3px;
  float: right;
  margin: 10px 2px 5px 0;
  background-color: ${({ theme }) => theme.colors.PINK};
`;
const MyMsgBox = styled.div`
  margin: 0 44px 10px auto;
`;
const MyMsgBoxP = styled.p`
  text-align: left;
  padding: 13px 10px 10px 10px;
  font-size: 15px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.PINK};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const ContentForm = styled.form`
  display: flex;
  margin-top: 13px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
`;
const ContentInput = styled.input`
  border: none;
  height: 50px;
  width: 500px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  &::placeholder {
    color: #bdbdbd;
  }
`;
const FormWrap = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  display: flex;
  align-items: center;
  height: 60px;
  width: 490px;
  padding: 18px;
`;
const InputIcon = styled.img`
  height: 20px;
  width: 18px;
  margin-left: 8px;
  opacity: 0.5;
`;
const ContentBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.PINK};
  height: 60px;
  width: 60px;
  margin-left: 10px;
  border-radius: 10px;
  padding-top: 5px;
  img {
    height: 30px;
    width: 30px;
  }
`;
const ContentLink = styled.a`
  display: flex;
  color: blue;
  text-decoration: underline;
`;
const ContentImg = styled.img`
  display: flex;
  margin: 10px;
  height: 50px;
  width: 50px;
`;
export default Content;
