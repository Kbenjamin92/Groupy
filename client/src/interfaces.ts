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
    groupName: string,
    groupDescription: string,
    memberEmail?: string,
    created_by?: string
}

export interface MotionButtonType {
    children: React.ReactNode,
}

export interface AuthProviderProps {
    children: React.ReactNode;
  }

export interface AuthContextType {
    isAuthenticated: boolean,
    login: () => void,
    logout: () => void
  }