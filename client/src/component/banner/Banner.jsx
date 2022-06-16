import { Box, Typography, styled } from "@mui/material";


const Image = styled(Box)`
    background: url(https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_960_720.jpg) center/55% repeat-x #000;
    width: 100%;
    height:50vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FF9800;
    line-height:1;
    

`
const Subheading = styled(Typography)`
    font-size:20px;
    background: #FFF;
`
const Banner = () => {
    return (
        <Image>
            <Heading>BLOG</Heading>
            <Subheading>There is power in words what you say is what you get</Subheading>
        </Image>
    )
}

export default Banner;