import NewTaskForm from "./NewTaskForm"
import style from "./styles.module.scss"

function CreateTaskSection({ id }) {
  return (
    <section id={id} className={style.wrapper}>
      <h2>Criar Tarefa:</h2>
      <NewTaskForm />
    </section>
  )
}

export default CreateTaskSection