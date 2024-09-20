'use client'

import React, { useState } from 'react'
import styles from './modal.module.scss'
import type { ModalProps } from '@/types'
import Button from '../button/Button'
import { useTasks } from '@/hooks/useTasks'
import { v4 as uuidv4 } from 'uuid'

const Modal = ({ title, type, setOpenModal, id }: ModalProps) => {
  const { setTasks, tasks } = useTasks()
  const [newTask, setNewTask] = useState('')

  const handleCancelModal = () => {
    setOpenModal(false)
  }

  const handleChangeNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleDeleteTask = () => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
    setOpenModal(false)
  }

  const handleAddTask = () => {
    if (newTask) {
      setTasks((previousTask) => [
        ...previousTask,
        { checked: false, title: newTask, id: uuidv4() },
      ])

      setOpenModal(false)
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3>{title}</h3>

        {type === 'add' ? (
          <div className={styles.inputContainer}>
            <label htmlFor="new-task">Título</label>
            <input
              type="text"
              value={newTask}
              id="new-task"
              onChange={handleChangeNewTask}
            />
          </div>
        ) : (
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
        )}

        <div className={styles.buttonContainer}>
          <Button title="Cancelar" type="normal" onClick={handleCancelModal} />

          {type === 'add' ? (
            <Button type="primal" title="Adicionar" onClick={handleAddTask} />
          ) : (
            <Button type="destroy" title="Deletar" onClick={handleDeleteTask} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
