import { create } from 'zustand'

type Version = {
  versionCode: number
  criticalVersionCode: number
  version: string
  features: Array<string>
  size: string
}

type VersionStore = {
  version: Version | null
  setVersion: (version: Version) => void
}

const versionStore = create<VersionStore>((set) => ({
  version: null,
  setVersion: (version) => set({ version }),
}))

export default versionStore
