import {NoteLi, NoteHead, NotePara} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails

  return (
    <NoteLi>
      <NoteHead>{title}</NoteHead>
      <NotePara>{noteText}</NotePara>
    </NoteLi>
  )
}
export default NoteItem
