export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    next(action);
  }
  catch(e) {
    console.log(e.message);
  }
};