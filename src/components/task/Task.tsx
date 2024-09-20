'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from './task.module.scss'
import type { TaskProps } from '@/types'
import Modal from '../modal/Modal'
import { useTasks } from '@/hooks/useTasks'

const Task = ({ checked, title, id }: TaskProps) => {
  const { setTasks, tasks } = useTasks()
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true)
  }

  const handleToggleCheckTask = () => {
    const clonedTasks = [...tasks]
    const currentTask = clonedTasks.find((task) => task.id === id) as TaskProps

    currentTask.checked = !currentTask?.checked

    setTasks(clonedTasks)
  }
  return (
    <div className={styles.container}>
      <div onClick={handleToggleCheckTask}>
        <input type="checkbox" defaultChecked={checked} />
        <p className={`${styles.button} ${checked ? styles.active : ''}`}>
          {title}
        </p>
      </div>

      <Image
        src="/icons/trash.svg"
        alt="trash icon"
        width={24}
        height={24}
        onClick={handleOpenDeleteModal}
      />

      {openDeleteModal && (
        <Modal
          setOpenModal={setOpenDeleteModal}
          title="Deletar tarefa"
          type="delete"
          id={id}
        />
      )}
    </div>
  )
}

export default Task
