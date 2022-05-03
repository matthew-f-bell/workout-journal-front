const Profile = (props) => {
    return (
        <div>
            <img src="" alt="profile picture" />
            <h1>{props.user.first_name} {props.user.last_name}</h1>
        </div>
    )
}

export default Profile;