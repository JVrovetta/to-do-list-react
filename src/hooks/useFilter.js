import { useState } from "react";

function useFilter() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortDate, setSortDate] = useState("newer")

  const filterTasks = (tasks) => {
    const filteredTasks = tasks
      .filter(task => {
        switch (categoryFilter) {
          case "all":
            return true
          case "work":
            return task.category === "Trabalho"
          case "personal":
            return task.category === "Pessoal"
          case "study":
            return task.category === "Estudo"
        }
      })
      .filter(task => {
        switch (statusFilter) {
          case "all":
            return true
          case "completed":
            return task.isCompleted === true
          case "incompleted":
            return task.isCompleted === false
        }
      })
      .sort((a, b) =>
        sortDate === "newer" ? b.date.dateValue - a.date.dateValue : a.date.dateValue - b.date.dateValue)
    return filteredTasks
  }

  return { statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, sortDate, setSortDate, filterTasks }
}

export default useFilter