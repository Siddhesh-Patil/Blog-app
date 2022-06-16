import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #2874f0;
    color:#FFF;
    font-weight:600;

`

const Container = styled(Toolbar)`
    justify-content: center;
    & > a{
        padding:20px;
        color:#FFF;
        text-decoration:none;
    }
`
const Header = () => {
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;