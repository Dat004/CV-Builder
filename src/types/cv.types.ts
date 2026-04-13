/** Khớp docs/api-contracts.md (thư mục cha) */
export interface CVData {
  personalInfo: {
    fullName: string
    email: string
    phone?: string
    location?: string
    linkedin?: string
  }
  experience: Array<{
    id: string
    company: string
    role: string
    startDate: string
    endDate?: string
    current?: boolean
    bullets: string[]
  }>
  education: Array<{
    id: string
    school: string
    degree?: string
    field?: string
    startDate?: string
    endDate?: string
  }>
  skills: string[]
}
