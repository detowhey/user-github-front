import { FormControl } from "react-bootstrap"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { InputType } from "../../common/util/enum/inputType"

interface Props {
    className: string,
    label: string,
    type?: string,
    placeholder: string
}

export default function FloatingInput({ className, label, type = InputType.TEXT, placeholder }: Props) {
	return (
		<FloatingLabel
			label={label}
			className={className}>
			<FormControl
				type={type}
				placeholder={placeholder}></FormControl>
		</FloatingLabel>
	)
}
