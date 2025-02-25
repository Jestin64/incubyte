function add(str) {
  return str.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(add("1,2,3"));
