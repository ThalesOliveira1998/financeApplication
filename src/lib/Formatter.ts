export const currencyFormatter = (currency: number, locale = 'pt-BR') => {
  return new Intl.NumberFormat(locale, {
    currency: 'BRL',
    style: 'currency'
  }).format(currency)
}

export const dataFormatter = (data: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short'
  }).format(data)
}

export const formatToDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date
}
