export interface UserSignupType {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    confirmPassword?: string
}

export interface UserLoginType {
    username: string,
    password: string
}

export interface GroupType {
    groupName: string
}