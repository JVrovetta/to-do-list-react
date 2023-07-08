import { useState } from "react"

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("todo-tasks")
    if (storedTasks) return JSON.parse(storedTasks)
    return []
  })

  const addTask = (title, category) => {
    const idGenerator = () => {
      const alreadyUsed = tasks.map(task => task.id)
      let newId
      do {
        newId = Math.floor(Math.random() * 1000000)
      } while (alreadyUsed.includes(newId));
      return newId
    }

    const now = new Date()
    const newTask = {
      id: idGenerator(),
      title: title,
      category: category,
      date: {
        dateValue: now.getTime(),
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear(),
        hour: now.getHours(),
        minute: now.getMinutes()
      },
      isCompleted: false
    }
    setTasks((curr) => {
      const updatedTasks = [...curr, newTask]
      localStorage.setItem("todo-tasks", JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  const removeTask = (id) => {
    setTasks(curr => {
      const updatedTasks = curr.filter(task => task.id !== id)
      localStorage.setItem("todo-tasks", JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  const completeTask = (id) => {
    setTasks(curr => {
      const updatedTasks = curr.map(task => {
        if (task.id === id) {
          const updatedTask = { ...task }
          updatedTask.isCompleted = !task.isCompleted
          return updatedTask
        }
        return task
      })
      localStorage.setItem("todo-tasks", JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  return { tasks, addTask, removeTask, completeTask }
}

export default useTasks