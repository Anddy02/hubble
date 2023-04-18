import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme})=>theme.colors.header};
    padding: 40px 0;
`;

export const Nav = styled.nav`
display: flex;
aling-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media(max-width: ${({theme}) => theme.mobile }){
    flex-direction: column;
};
`

export const Logo = styled.img`
width: 100%;
max-width: 150px;
display: block;

@media(max-width: ${({theme})=> theme.mobile }){
    max-width: 180px;
    margin-bottom: 40px;
}
`

export const Image = styled.img`
width: 375px;
margin-left: 40px;

@media(max-width: ${({theme})=> theme.mobile }){
    margin-bottom: 40px 0 30px;
}
`