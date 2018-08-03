function takeANumber(line, newPerson) {
  line.push(newPerson)
  var position = line.length
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = line[0]
    line.shift()
    return currentCustomer
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var lineText = "The line is currently: "
  }
}