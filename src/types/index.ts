export interface Button {
  title: string
  type?: 'destroy' | 'primal' | 'normal'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface TaskProps {
  title: string
  checked: boolean
  id: string
}

export interface TaskContextProps {
  tasks: TaskProps[]
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
}

export interface ModalProps {
  type: 'delete' | 'add'
  title: string
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  id?: string
}
