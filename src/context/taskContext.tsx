'use client'

import { TaskProps, type TaskContextProps } from '@/types'
import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

const mockTasks = [
  { checked: false, title: 'Lavar as mãos', id: uuidv4() },
  { checked: false, title: 'Fazer um bolo', id: uuidv4() },
  { checked: false, title: 'Lavar a Louça', id: uuidv4() },
  { checked: true, title: 'Levar o lixo para fora', id: uuidv4() },
]

export const TaskContext = createContext<TaskContextProps>({
  setTasks: () => {},
  tasks: [],
})

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify(mockTasks))
      setTasks(mockTasks)
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  const value = useMemo(() => ({ tasks, setTasks }), [tasks])

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}
