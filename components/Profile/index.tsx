import { FunctionComponent } from "react";
import { Container, ProfileImage } from './styles';

const Profile: FunctionComponent = () => {
    return (
        <Container>
            <ProfileImage src={'https://portfolio-bucket-kn.s3.amazonaws.com/profile.jpg'} alt={'profile'} />
        </Container>
    )
}

export default Profile;