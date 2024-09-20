import { TaskContext } from '@/context/taskContext'
import { useContext } from 'react'

export const useTasks = () => {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um TaskProvider')
  }

  return context
}
