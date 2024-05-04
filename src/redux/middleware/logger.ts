
const logger = (state) => (next) => (action) => {
  console.log("state =>", state.getState())
  console.log("action => ", action)
  next(action)
}
export default logger