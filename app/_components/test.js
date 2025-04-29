// const [currentTodos, setCurrentTodos] = useOptimistic(todos, () => {
//   return data.map((todo) => ({
//     ...todo,
//     completed: !todo.completed,
//   }));
// }, [data]);

// const handleToggle = (id) => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     )
//   );
// }
// const handleDelete = (id) => {
//   setCurrentTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
// }

// const handleEdit = (id, newText) => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       todo.id === id ? { ...todo, text: newText } : todo
//     )
//   );
// }
// const handleAdd = (newTodo) => {
//   setCurrentTodos((prevTodos) => [...prevTodos, newTodo]);
// }
// const handleClearCompleted = () => {
//   setCurrentTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
// }
// const handleToggleAll = () => {
//   const allCompleted = currentTodos.every((todo) => todo.completed);
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, completed: !allCompleted }))
//   );
// }
// const handleUndo = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
//   );
// }
// const handleRedo = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
//   );
// }
// const handleSave = () => {
//   // Save the currentTodos to the server or local storage
// }
// const handleLoad = () => {
//   // Load the todos from the server or local storage
//   setCurrentTodos(data);
// }
// const handleFilter = (filter) => {
//   switch (filter) {
//     case "all":
//       return data;
//     case "active":
//       return data.filter((todo) => !todo.completed);
//     case "completed":
//       return data.filter((todo) => todo.completed);
//     default:
//       return data;
//   }
// }
// const handleSort = (sortBy) => {
//   switch (sortBy) {
//     case "date":
//       return data.sort((a, b) => new Date(b.date) - new Date(a.date));
//     case "priority":
//       return data.sort((a, b) => b.priority - a.priority);
//     case "alphabetical":
//       return data.sort((a, b) => a.text.localeCompare(b.text));
//     default:
//       return data;
//   }
// }
// const handleSearch = (query) => {
//   return data.filter((todo) =>
//     todo.text.toLowerCase().includes(query.toLowerCase())
//   );
// }
// const handleSelectAll = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, selected: true }))
//   );
// }
// const handleDeselectAll = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, selected: false }))
//   );
// }
// const handleSelect = (id) => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       todo.id === id ? { ...todo, selected: !todo.selected } : todo
//     )
//   );
// }
// const handleDeselect = (id) => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       todo.id === id ? { ...todo, selected: false } : todo
//     )
//   );
// }
// const handleSelectNone = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, selected: false }))
//   );
// }
// const handleSelectAllCompleted = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       todo.completed ? { ...todo, selected: true } : todo
//     )
//   );
// }
// const handleSelectAllActive = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       !todo.completed ? { ...todo, selected: true } : todo
//     )
//   );
// }
// const handleSelectAllNone = () => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) => ({ ...todo, selected: false }))
//   );
// }
// const handleSelectAllText = (text) => {
//   setCurrentTodos((prevTodos) =>
//     prevTodos.map((todo) =>
//       todo.text.toLowerCase().includes(text.toLowerCase())
//         ? { ...todo, selected: true }
//         : todo
//     )
//   );
// }
