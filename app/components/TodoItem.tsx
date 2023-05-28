import { TodoItem } from '@/Types/types'

type Props = {
  todo: TodoItem
}

export default function TodoItem({ todo }: Props) {
  return (
    <li className="flex gap-1 items-center">
      <input id={todo.id} type="checkbox" className="cursor-pointer peer" defaultChecked={todo.complete} />
      <label
        htmlFor={todo.id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {todo.title}
      </label>
    </li>
  )
}
