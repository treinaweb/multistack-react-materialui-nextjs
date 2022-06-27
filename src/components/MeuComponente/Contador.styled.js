import { styled } from '@mui/material'
import {Button} from '@mui/material'




export const MinhaDiv =  styled('div')`
    color: blue;
    background-color: green;
    .meuParagrafo{
        color: ${({theme})=> theme.palette.secondary.main};
    }

`
// 1 = 8px
// 2 = 16px
// 10 = 80px
export const MeuBotao = styled(Button)`
    background:blue;
    color: white;
    margin: ${({theme}) => theme.spacing(10)};

     &:hover{
        background: red;
     }
     &.MuiButton-text{
        color: yellow;
     }
`