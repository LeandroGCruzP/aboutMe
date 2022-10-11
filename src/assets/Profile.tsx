import Image from 'next/image'
import profile from '../../public/profileLeandro.png'

export function Profile() {
  return <Image src={profile} alt="Profile" />
}
