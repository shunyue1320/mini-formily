let { observable, toJS, autorun } = await import('@formily/reactive');

const values = { username:'zhufeng',age:1}
const observableValues = observable(values)

autorun(() => {
  console.log("observableValues ==", observableValues)
  // console.log("observableValues ==", observableValues.username)
  console.log("observableValues ==", observableValues.age)
})


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
