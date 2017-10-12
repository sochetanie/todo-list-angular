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
  vm.startRemove = startRemove
  vm.isInReadMode = isInReadMode
  vm.isInAddMode = isInAddMode
  vm.isInEditMode = isInEditMode
  vm.isInRemoveMode = isInRemoveMode
  vm.add = add
  vm.save = save
  vm.remove = remove
  vm.cancel = reset

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

  function startEdit(id) {
    reset()
    selectedId = id
    editFlag = true
    for (let i=0; i<vm.list.tasks.length; i++) {
      let task = vm.list.tasks[i]
      if (task.id == id) {
        vm.currentTask.name = task.name
        vm.currentTask.complete = task.complete
      }
    }
  }

  function startRemove(id) {
    reset()
    selectedId = id
    removeFlag = true
  }
 
  function isInReadMode(id) {
    return selectedId < 0 || selectedId != id
  }

  function isInEditMode(id) {
    return selectedId == id && editFlag
  }

  function isInRemoveMode(id) {
    return selectedId == id && removeFlag
  }

  function add() {
    vm.currentTask.complete = false
    vm.list.tasks.push(vm.currentTask)
    reset()
  }

  function save() {
    for (let i=0; i<vm.list.tasks.length; i++) {
      if (vm.list.tasks[i].id == selectedId) {
        vm.list.tasks[i].name = vm.currentTask.name
        vm.list.tasks[i].complete = vm.currentTask.complete
        reset()
      }
    }
  }

  function remove(id) {
    for (let i=0; i<vm.list.tasks.length; i++) {
      if (vm.list.tasks[i].id == id) {
        vm.list.tasks.splice(i, 1)
        reset()
      }
    }
  }


}