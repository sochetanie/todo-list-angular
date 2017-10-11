angular
  .module('todoApp')
  .controller('ListController', ListController)

function ListController() {
  let vm = this
  let selectedId = -1
  let addFlag = false
  let editFlag = false
  let removeFlag = false

  vm.currentTask = {}
  vm.startAdd = startAdd
  vm.startEdit = startEdit
  vm.isInReadMode = isInReadMode
  vm.isInAddMode = isInAddMode
  vm.isInEditMode = isInAddMode
  vm.add = add
  vm.save = save

  vm.list = {
    name: "ToDo List",
    tasks: [
      {
        id: 1,
        name: "Take out trash",
        complete: false

      },
      {
        id: 2,
        name: "Buy Grandma a present",
        complete: false
      },
      {
        id: 3,
        name: "Clean out car",
        complete: true
      },
      {
        id: 4,
        name: "Fix the bathroom sink",
        complete: false
      }
    ]
  }

  function reset() {
    selectedId = -1
    addFlag = false
    editFlag = false
    removeFlag = false
  }

  function startAdd() {
    reset()
    addFlag = true
    vm.currentTask = {}
  }

  function isInAddMode() {
    return addFlag
  }

  function startEdit() {

  }

  function isInReadMode() {
    return true
  }

  function isInEditMode() {

  }

  function add() {
    vm.currentTask.complete = false
    vm.list.tasks.push(vm.currentTask)
    reset()
  }

  function save() {

  }



}