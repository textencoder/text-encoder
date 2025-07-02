import { useState } from 'react'
import Picker from 'react-mobile-picker'

const selections = ["H", "S", "L"]

export default function WheelPicker({style = {}}) {
  const [pickerValue, setPickerValue] = useState("hue")

  return (
    <Picker style={style} itemHeight={20} value={pickerValue} onChange={setPickerValue} wheelMode="natural">
        <Picker.Column>
          {selections.map(option => (
            <Picker.Item key={option} value={option}>
              {option}
            </Picker.Item>
          ))}
        </Picker.Column>
    </Picker>
  )
}