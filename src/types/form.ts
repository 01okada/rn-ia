export type Form = {
    fullName: string
    role: string
    company?: string
    experience: string
    cardColor: string
    favoriteTech: string
}

export type FormError = {
    fullName?: string
    role?: string
    company?: string
    experience?: string
    cardColor?: string
    favoriteTech?: string
}
