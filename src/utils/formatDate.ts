const formatDate = (date: Date): string => {
  const convertedDate = new Date(date).toLocaleDateString('pt-BR');

  return convertedDate;
};

export default formatDate;
