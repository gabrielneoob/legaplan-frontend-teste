export interface Button {
  title: string
  type?: 'destroy' | 'primal' | 'normal'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface TaskProps {
  title: string
  checked: boolean
}
