import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { GithubUser } from "../../common/util/githubUser"
import Button from "react-bootstrap/Button"
import { ButtonTheme } from "../../common/util/enum/buttonsTheme"

interface Props {
    variant?: string,
    srcImage: string,
    githubUser: GithubUser
}

export default function CardUser({ variant = "top", githubUser }: Props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant={variant} src={githubUser.avatarUrl}></Card.Img>
			<Card.Body>
				<Card.Title>{githubUser.profileName}</Card.Title>
			</Card.Body>
			<ListGroup className='list-group-flush'>
				<ListGroup.Item>Nickname: {githubUser.login}</ListGroup.Item>
				<ListGroup.Item>Create in {githubUser.createDate}</ListGroup.Item>
				<ListGroup.Item>Public repos: {githubUser.numberPublicRepos}</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Button href={githubUser.urlProfile} type='button' variant={ButtonTheme.DARK} target='_blank'>
                    Go to profile
				</Button>
			</Card.Body>
		</Card>

	)
}
