function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var position = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = katzDeliLine[0]
    katzDeliLine.shift()
    return currentCustomer
  }
}