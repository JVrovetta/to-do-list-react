import { useContext, useState } from "react"
import Button from "../../common/Button"
import TasksContext from "../../../contexts/TasksContext"
import Input from "../../common/Input"
import Select from "../../common/Select"

function NewTaskForm() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const { addTask } = useContext(TasksContext)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addTask(title, category)
    setTitle("")
    setCategory("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(ev) => setTitle(ev.currentTarget.value)}
        required={true}
      />
      <Select
        value={category}
        onChange={(ev) => setCategory(ev.currentTarget.value)}
        required={true}
      >
        <option value="" disabled>Escolha uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudo">Estudo</option>
      </Select>
      <Button type="submit">Criar Tarefa</Button>
    </form>
  )
}

export default NewTaskForm