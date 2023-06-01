export class GithubUser {

    login: string
    profileName: string
    avatarUrl: string
    urlProfile: string
    createDate: string
    numberPublicRepos: number


    constructor(login: string, profileName: string, avatarUrl: string, urlProfile: string, createDate: string, numberPublicRepos: number) {
        this.login = login
        this.profileName = profileName
        this.avatarUrl = avatarUrl
        this.urlProfile = urlProfile
        this.createDate = createDate
        this.numberPublicRepos = numberPublicRepos
    }
}
