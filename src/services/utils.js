const weeks = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const monthsAbreviation = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ',
];

const getDataTitle = date => `${weeks[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} `;

const getHour = date => date.getHours();

const getDay = date => date.getDay();

const getMonthAbreviation = date => monthsAbreviation[date.getMonth()];

export {
  getDataTitle, getHour, getDay, getMonthAbreviation,
};
