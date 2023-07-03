import Button from "react-bootstrap/Button"
import { ButtonTheme } from "../../common/util/enum/buttonsTheme"

interface Props {
  type?: "button" | "submit" | undefined,
  onClick?: () => void,
  buttonName?: string
  variant?: ButtonTheme,
}

export default function GenericButton({ onClick, type, buttonName, variant = ButtonTheme.DARK }: Props) {
	return (
		<Button
			variant={variant}
			className="mr-1"
			onClick={onClick}
			type={type}>
			{buttonName}
		</Button>
	)
}
