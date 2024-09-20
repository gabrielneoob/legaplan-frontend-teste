'use client'

import React, { useState } from 'react'
import styles from './card.module.scss'
import Button from '../button/Button'
import Task from '../task/Task'
import { useTasks } from '@/hooks/useTasks'
import Modal from '../modal/Modal'

const Card = () => {
  const [openAddModal, setOpenAddModal] = useState(false)
  const { tasks } = useTasks()

  const handleOpenAddModal = () => {
    setOpenAddModal(true)
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <p>Suas tarefas de hoje</p>

        {tasks
          .filter((task) => !task.checked)
          .map(({ checked, title, id }) => (
            <Task key={title} checked={checked} title={title} id={id} />
          ))}

        <p>Trefas finalizadas</p>

        {tasks
          .filter((task) => task.checked)
          .map(({ checked, title, id }) => (
            <Task key={title} checked={checked} title={title} id={id} />
          ))}
      </div>
      <Button
        title="Adicionar nova tarefa"
        onClick={handleOpenAddModal}
        type="primal"
      />
      {openAddModal && (
        <Modal type="add" setOpenModal={setOpenAddModal} title="Nova tarefa" />
      )}
    </main>
  )
}

export default Card
