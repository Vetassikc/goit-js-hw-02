const maxStringLength = 40;

const formatString = function (string) {
  if (string.length > maxStringLength) {
    string = string.slice(0, maxStringLength) + '...';
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
