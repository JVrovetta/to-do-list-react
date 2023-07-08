import { useContext } from "react"
import Button from "../common/Button"
import Select from "../common/Select"
import style from "./styles.module.scss"
import FilterContext from "../../contexts/FilterContext"

function FilterTaskSection({ id }) {
  const { statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, setSortDate } = useContext(FilterContext)

  return (
    <section id={id} className={style.wrapper}>
      <h2>Filtrar:</h2>
      <div className={style.filter}>
        <div>
          <p>Categoria:</p>
          <Select
            value={categoryFilter}
            onChange={(ev) => setCategoryFilter(ev.currentTarget.value)}
          >
            <option value="all">Todos</option>
            <option value="work">Trabalho</option>
            <option value="personal">Pessoal</option>
            <option value="study">Estudo</option>
          </Select>
        </div>
        <div>
          <p>Status:</p>
          <Select
            value={statusFilter}
            onChange={(ev) => setStatusFilter(ev.currentTarget.value)}
          >
            <option value="all">Todos</option>
            <option value="completed">Completos</option>
            <option value="incompleted">Incompletos</option>
          </Select>
        </div>
      </div>
      <div className={style.order}>
        <p>Data de criação:</p>
        <Button onClick={() => setSortDate("newer")}>+ Recente</Button>
        <Button onClick={() => setSortDate("older")}>+ Antigo</Button>
      </div>
    </section>
  )
}

export default FilterTaskSection