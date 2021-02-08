import React from 'react';
import styled from 'styled-components';
import Dropdown from "../Dropdown";
import {useSelector} from "react-redux";
import {appActions} from "../../../redux/ActionCreators";
import {DotsMenuSvg} from "../Svg";
import LoginPopup from "../Popup/LoginPopup/LoginPopup";

const Nav = () => {

    const {dropdown,popup} = useSelector(state => state.app);

    const handleDropdown = () => {
        appActions.updateState({
            dropdown: !dropdown,
        })
    }

    const handlePopup = () => {
        appActions.updateState({
            popup:!popup
        })
    }
    return (
        <Container>
            <Gnb>
                <GnbItem>
                    Brands
                    <span role="presentation" className="Sticker">New</span>
                </GnbItem>
                <GnbItem>Explore</GnbItem>
                <DropdownMenu>
                    <MoreButton onClick={handleDropdown}>
                        <DotsMenuSvg/>
                    </MoreButton>
                    <Dropdown/>
                </DropdownMenu>
            </Gnb>
            <SubmitPhoto onClick={handlePopup}>
                Submit a Photo
            </SubmitPhoto>
            <MemberArea>
                <Login>
                    Login
                </Login>
                <LoginPopup/>
                <Join>
                    Join free
                </Join>
            </MemberArea>
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  color: #777;
  height: 50px;
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
  position: relative;
`;

const GnbItem = styled.div`
  padding: 0 12px;
  cursor: pointer;
  transition: 0.3s;

  span.Sticker {
    position: relative;
    top: -10px;
    font-size: 10px;
    background: linear-gradient(94deg, #ff2a2a, #7074ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  &:hover {
    color: #333;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
`;

const MoreButton = styled.div`
  padding: 0 12px;
  cursor: pointer;

  svg {
    fill: #777;
  }
`;

const SubmitPhoto = styled.button`
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  padding: 8px 11px;
  font-size: 15px;
  color: #777;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 30px;
  user-select: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    color: #333;
    border-color: #777;
  }
`;

const MemberArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 1px;
    height: 30px;
    background: #ddd;
  }
`;

const Login = styled.div`
  margin: 0 25px;
  padding: 4px 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #333;
  }
`;

const Join = styled.div`
  padding: 8px 11px 6px;
  background: #3db46d;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s;
  user-select: none;

  &:hover {
    background: #32ab61;
  }
`;


export default Nav;