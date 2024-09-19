export const formatCurrentDate = (): string => {
  const daysOfWeek: string[] = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]
  const months: string[] = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]

  const currentDate: Date = new Date()
  const dayOfWeek: string = daysOfWeek[currentDate.getDay()]
  const day: string = String(currentDate.getDate()).padStart(2, '0')
  const month: string = months[currentDate.getMonth()]
  const year: number = currentDate.getFullYear()

  return `${dayOfWeek}, ${day} de ${month} ${year}`
}
