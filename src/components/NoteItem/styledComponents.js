import styled from 'styled-components'

export const NoteLi = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid #aab8c8;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    @media (min-width:768px) {
        width: 200px;
    }
    
    `

export const NoteHead = styled.h1`
    color: #1e293b;
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
    margin-bottom: 10px;
    @media (min-width:768px) {
        font-size: 23px;
    }
    
    `

export const NotePara = styled.p`
    color: #475569;
    font-size: 13px;
    margin: 0px;
    line-height: 20px;
    
    @media (min-width:768px) {
        font-size: 16px;
}

`
