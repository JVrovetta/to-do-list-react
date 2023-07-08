import SearchTaskSection from "./components/SearchTaskSection"
import FilterTaskSection from "./components/FilterTaskSection"
import TaskSection from "./components/TaskSection"
import CreateTaskSection from "./components/CreateTaskSection"
import useTasks from "./hooks/useTasks"
import useSearch from "./hooks/useSearch"
import useFilter from "./hooks/useFilter"
import TasksContext from "./contexts/TasksContext"
import SearchContext from "./contexts/SearchContext"
import FilterContext from "./contexts/FilterContext"

function App() {
  const handleTasks = useTasks()
  const handleSearch = useSearch()
  const handleFilter = useFilter()

  return (
    <div id="app">
      <h1>Lista de Tarefas</h1>
      <TasksContext.Provider value={handleTasks}>
        <SearchContext.Provider value={handleSearch}>
          <SearchTaskSection id={"searchTask"} />
          <FilterContext.Provider value={handleFilter}>
            <FilterTaskSection id={"filterTask"} />
            <TaskSection id={"task"} />
          </FilterContext.Provider>
        </SearchContext.Provider>
        <CreateTaskSection id={"createTask"} />
      </TasksContext.Provider>
    </div>
  )
}

export default App
