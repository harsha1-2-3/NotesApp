import styled from 'styled-components'

export const Bg = styled.div`
    padding: 30px;
    min-height: 100vh;
     display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    `
export const BgCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:75%;    
`
export const Head = styled.h1`
    font-family: Bree Serif;
    font-size: 25px;
    font-weight: bold;
    margin: 0px;
    color: #4c63b6;
    text-align: center;
    margin-bottom: 20px;
    @media (min-width:768px) {
        font-size: 40px;
        margin-bottom: 30px;
    }
    
    
    `

export const InputForm = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 1px 1px 6px 1px #aab8c8;
    margin-bottom:30px;
    
    `

export const TitleBox = styled.input`
    border: 0px;
    color: #475569;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 10px;
    margin: 0px;
    @media (min-width:768px) {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
    }
    
    `

export const NoteBox = styled.textarea`
    resize: none;
    border: 0px;
    color: #475569;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 10px;
    margin-bottom: 10px;
    @media (min-width:768px) {
        font-size: 20px;
    }
    
    `

export const AddBtn = styled.button`
    color: white;
    background-color: #4c63b6;
    cursor: pointer;
    outline: none;
    font-weight: bold;
    height: 40px;
    width: 70px;
    border-radius: 5px;
    border: 0px;
    align-self: flex-end;
    margin: 10px;
    
    `

export const ErrorMsg = styled.p`
    color:red;
    font-size:13px; 
    margin:0px;
    margin-top:5px;
    `

export const NotesUl = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width:768px) {
        flex-direction: row;
    }
    
    `

export const EmptyCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
    `

export const EmptyImg = styled.img`
    height: 80px;
    width: 80px;
    margin: 0px;
    margin-bottom: 20px;
    @media (min-width:768px) {
        height: 130px;
        width: 130px;
    }
    
    `

export const EmptyHead = styled.h1`
    color: #334155;
    font-weight: bold;
    font-size: 20px;
    margin: 0px;
    margin-bottom: 10px;
    @media (min-width:768px) {
        font-size: 25px;
    }
    
    `

export const EmptyPara = styled.p`
    color: #475569;
    font-size: 15px;
    margin: 0px;
    @media (min-width:768px) {
        font-size: 20px;
    }
    
    `
