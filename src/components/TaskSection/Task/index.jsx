import style from './styles.module.scss'
import Button from '../../common/Button'
import { useContext } from 'react'
import TasksContext from '../../../contexts/TasksContext'

const Task = ({ task }) => {
  const { removeTask, completeTask } = useContext(TasksContext)
  const { day, month, year, hour, minute } = task.date

  return (
    <div className={
      task.isCompleted ? `${style.wrapper} ${style.completed} ${style[task.category]}` : `${style.wrapper} ${style[task.category]}`
    }
    >
      <div className={style.taskContent}>
        <h3>{task.title}</h3>
        <p>( {task.category} )</p>
        <small>{`${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year} | ${hour}:${minute.toString().padStart(2, "0")}`}</small>
      </div>
      <div className={style.taskControls}>
        <Button role={"complete"} onClick={() => { completeTask(task.id) }}>Completar</Button>
        <Button role={"remove"} onClick={() => { removeTask(task.id) }}>X</Button>
      </div>
    </div>
  )
}
export default Task