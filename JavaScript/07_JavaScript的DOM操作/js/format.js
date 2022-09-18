var formatPadLeft = function (value, padLength, padString) {
  padLength = padLength || 2
  padString = padString || "0"

  var pasStr = String(value)

  return pasStr.padStart(padLength, padString)
}