// Style your components here
import styled from 'styled-components/macro'
export const AppContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
`
export const MemeGeneratorContainer = styled.div`
 display:flex:
 flex-direction:column;
 width:100%;
 max-width:550px;
 padding-top:32px;
 padding-right:24px;
 padding-bottom:32px;
 padding-left:25px;
 @media screen and (min-width: 768px){
    width:85%;
    max-width:1140px;
 }
`
export const Heading = styled.h1`
  color:#35469c;
  font-family:"Open Sans"
  font-size:24px;
  font-weight:bold;
  text-align:center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px){
        font-size: 36px;
        text-align:left;
        }
`
export const FormAndMemoContainer = styled.div`
 display:flex;
 flex-direction: column;
 justify-content: space-between;
 @media screen and (min-width: 768px){
    flex-direction: row-reverse;
}
`
export const MemeContainer = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 text-align:center;
 background-image:url(${props => props.backgroundImage});
 background-size:cover;
 height:300px;
 padding-left: 10px;
 padding-right: 10px;
 margin-bottom: 50px;
 @media screen and (min-width: 768px){
    width:45%;
    margin-top:5px;
    margin-bottom: 20px
    }
    export const TextContent = styled.p
     color:white;
     font-size: ${props => props.activeFontSizeId}px;
     font-weight:600
     font-family:"Open Sans";
`
export const MemeGeneratorForm = styled.form`
display:flex;
flex-direction:column;
justify-content:space-between;
 @media screen and (min-width: 768px){
    width: 40%;
}
`
export const CustomLabel = styled.label`
 color: #7e858e;
 font-family:'Open Sans';
 font-weight: 500;
 font-size:12px;
 line-height:1.2;
 margin-bottom:0px;
`
export const CustomInput = styled.input`
 color:#5a7184;
 background-color:white;
 font-family:'Open Sans';
 height:40px;
 border: 1px solid #d7dfe9;
 border-radius: 5px;
 padding-top: 12px;
 padding-right:15px;
 padding-bottom:12px;
 padding-left: 14px;
 margin-top: 5px;
 margin-bottom:20px;
 outline:none;
`
export const CustomSelect = styled.select`
 font-family:'Open Sans';
 color:#1e293b;
 background-color:white;
 height:40px;
 border: 1px solid #d7dfe9;
 border-radius: 5px;
 padding-top: 10px;
 margin-top: 10px;
 margin-bottom:10px;
 outline:none;
 padding:10px;
`
export const CustomOption = styled.option`
 padding-top: 12px;
 padding-right:15px;
 padding-bottom:12px;
 padding-left: 14px;
 font-size:15px;
`
export const GenerateButton = styled.button`
 font-size:15px;
 font-family:'Open Sans';
 color:white;
 border-radius: 5px;
 font-weight:500;
 border: none;
 min-width:25p;
 max-width:150px;
 padding-top: 12px;
 padding-right:25px;
 padding-bottom:12px;
 padding-left: 14px;
 margin-top: 15px;
 cursor:pointer;
 outline:none;
`