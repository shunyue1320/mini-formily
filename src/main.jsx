// let { observable, toJS, autorun } = await import('@formily/reactive');
import { observable, autorun } from '../packages/reactive'

const values = { name:'小明', age: 18 }
const observableValues = observable(values)

autorun(() => {
  console.log("observableValues ==", observableValues)
  console.log("observableValues.age ==", observableValues.age)
})
