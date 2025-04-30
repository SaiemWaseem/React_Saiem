import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
      className={`flex items-center gap-4 justify-between border border-gray-200 rounded-xl px-5 py-3 shadow-md transition-all duration-300 
        ${todo.completed ? 'bg-lime-100' : 'bg-indigo-100 hover:bg-indigo-200'}`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="accent-indigo-500 cursor-pointer w-5 h-5"
        checked={todo.completed}
        onChange={toggleCompleted}
        title="Toggle complete"
      />

      {/* Todo Input */}
      <input
        type="text"
        className={`flex-1 bg-transparent text-base outline-none rounded-md px-2 py-1 font-medium transition-all duration-200 
          ${isTodoEditable ? 'border border-gray-300 bg-white' : 'border-transparent'} 
          ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Buttons */}
      <div className="flex items-center gap-2">
        {/* Edit/Save Button */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full text-lg bg-white shadow-inner hover:shadow-md transition hover:bg-gray-100 disabled:opacity-30"
          onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) {
              editTodo()
            } else {
              setIsTodoEditable((prev) => !prev)
            }
          }}
          disabled={todo.completed}
          title={isTodoEditable ? 'Save' : 'Edit'}
        >
          {isTodoEditable ? '💾' : '✏️'}
        </button>

        {/* Delete Button */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full text-lg bg-white shadow-inner hover:shadow-md transition hover:bg-red-100 hover:text-red-600"
          onClick={() => deleteTodo(todo.id)}
          title="Delete"
        >
          ❌
        </button>
      </div>
    </div>
  )
}

export default TodoItem
