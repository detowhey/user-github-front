import { FormControl } from "react-bootstrap"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { InputType } from "../../common/util/enum/inputType"
import { useState } from "react"

interface Props {
	className: string,
	label: string,
	type?: string,
	placeholder: string
}

export default function FloatingInput({ className, label, type = InputType.TEXT, placeholder }: Props) {

	const [valueInput, setUserName] = useState("")

	return (
		<FloatingLabel
			label={label}
			className={className}>
			<FormControl
				id="userInput"
				type={type}
				placeholder={placeholder}
				value={valueInput}
				onChange={event => setUserName(event.target.value)}
				required={true} />
		</FloatingLabel>

	)
}
