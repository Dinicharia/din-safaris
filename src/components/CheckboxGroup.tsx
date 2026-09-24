// src/components/CheckboxGroup.tsx
// A group of tick-boxes, used for destinations and experiences.

type CheckboxGroupProps = {
  legend: string
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}

function CheckboxGroup({ legend, options, selected, onToggle }: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend className="font-medium text-forest">{legend}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-sand">
            <input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(option)} className="h-5 w-5 accent-forest" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default CheckboxGroup