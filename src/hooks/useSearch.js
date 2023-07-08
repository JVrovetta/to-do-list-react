import { useState } from "react";

function useSearch() {
  const [search, setSearch] = useState("")

  const searchTasks = (tasks) => {
    return tasks
      .filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
  }

  return { search, setSearch, searchTasks }
}

export default useSearch