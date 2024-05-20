export const updateStatus = (todos, todo) => {
  return todos.reduce(
    (acc, t) => t.id === todo.id ?
      [...acc, { ...t, status: t.status === 'COMPLETED' ? 'TODO' : 'COMPLETED' }] :
      [...acc, t],
    [])
}