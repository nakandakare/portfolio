import { FunctionComponent } from "react";
import { Container, ProfileImage } from './styles';

const Profile: FunctionComponent = () => {
    return (
        <Container>
            <ProfileImage src={'https://media.licdn.com/dms/image/C4D03AQF7xJ5WJr-pHg/profile-displayphoto-shrink_800_800/0/1631216590215?e=1677715200&v=beta&t=3EHga-Guk9W4jal_HYGNxaK4eiPfagxmQwEdAVSOGUY'} alt={'profile'} />
        </Container>
    )
}

export default Profile;