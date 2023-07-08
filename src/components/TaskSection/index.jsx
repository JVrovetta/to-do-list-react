import { useContext } from "react"
import Task from "./Task"
import style from "./styles.module.scss"
import TasksContext from "../../contexts/TasksContext"
import SearchContext from "../../contexts/SearchContext"
import FilterContext from "../../contexts/FilterContext"

function TaskSection({ id }) {
  const { tasks } = useContext(TasksContext)
  const { searchTasks } = useContext(SearchContext)
  const { filterTasks } = useContext(FilterContext)

  const tasksToRender = searchTasks(filterTasks(tasks))

  return (
    <section id={id} className={style.wrapper}>
      {tasks.length > 0 ?
        tasksToRender.length > 0 ?
          tasksToRender.map(task => <Task key={task.id} task={task} />)
          :
          <div className={style.empty}>
            <h3>Nenhuma tarefa correspondente foi encontrada</h3>
            <p>Remova o modifique o Filtro/Pesquisa</p>
          </div>
        :
        <div className={style.empty}>
          <h3>Você ainda não possui tarefas =(</h3>
          <p>Adicione uma!</p>
        </div>
      }
    </section>
  )
}

export default TaskSection