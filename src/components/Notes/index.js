import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Bg,
  BgCard,
  Head,
  InputForm,
  TitleBox,
  NoteBox,
  AddBtn,
  NotesUl,
  EmptyCont,
  EmptyImg,
  EmptyHead,
  EmptyPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }
  const onClickAdd = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }

    setNotesList(prevList => [...prevList, newNote])
    setTitle('')
    setNoteText('')
  }

  const renderEmptyNotes = () => (
    <EmptyCont>
      <EmptyImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptyPara>Notes you add will appear here</EmptyPara>
    </EmptyCont>
  )

  const renderNotes = () => (
    <NotesUl>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesUl>
  )

  return (
    <Bg>
      <BgCard>
        <Head>Notes</Head>
        <InputForm onSubmit={onClickAdd}>
          <TitleBox
            onChange={onChangeTitle}
            value={title}
            placeholder="Title"
            type="text"
          />
          <NoteBox
            onChange={onChangeNoteText}
            value={noteText}
            placeholder="Take a Note..."
          ></NoteBox>
          <AddBtn type="submit">Add</AddBtn>
        </InputForm>
        {notesList.length === 0 ? renderEmptyNotes() : renderNotes()}
      </BgCard>
    </Bg>
  )
}
export default Notes
