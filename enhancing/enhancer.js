module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement <= 19) {
    return item.enhancement = item.enhancement + 1
  } else if(item.enhancement === 20) {
    return { ...item }
  }

  //return { ...item };
}

function fail(item) {
 if(item.enhancement < 15) {
  return item.durability = item.durability - 5
  } else if(item.enhancement >= 15 || item.enhancement > 16) {
      if(item.enhancement >= 15) {
        return item.durability = item.durability - 10
      } else if(item.enhancement > 16) {
        return item.enhancement = item.enhancement - 1
      }
  } 

  return { ...item };
}

function repair(item) {
  item.durability = 100
 
  return { ...item};
}

function get(item) {
  return { ...item };
}
