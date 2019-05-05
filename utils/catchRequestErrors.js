const catchRequestErrors = (err) => {
  console.log("Caught an Error")
  if (err.response){
    console.error(err.response.statusText)
    console.error(err.response.data)
  } else {
    console.error(err)
  }
}

module.exports = catchRequestErrors
