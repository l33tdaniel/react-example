export default function ProfilesPage() {
    const profiles = [1,2,3,4,5];

    return (
        <div>
            {profiles.map((profile) =>
                <Link key={profile} to={`/profiles/${profile}`}>
                    Profile {profile}
                </Link>
            )}
        </div>
    );
}