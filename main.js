function add(str) {
  if (str === "") return 0;

  return str.split(/,|\n/).reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(add("1\n2,3"));

module.exports = add;
