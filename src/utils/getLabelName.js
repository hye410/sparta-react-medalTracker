export const getLabel = (key) => {
  switch (key) {
    case 'country' :
      return '국가명';
    case 'gold' :
      return '금메달';
    case 'silver' :
      return '은메달';
    case 'bronze' :
      return '동메달';
    default :
      return '';
  }
}