import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'
import { LOAD_SIZE } from '@/types'

export const LoadIcon = ({ size }: { size: LOAD_SIZE }) => {
  const handleSize = () => {
    if (size === LOAD_SIZE.LARGE) {
      return 'w-20'
    } else if (size === LOAD_SIZE.SMALL) {
      return 'w-14'
    } else if (size === LOAD_SIZE.MEDIUM) {
      return 'w-10'
    }
    return ''
  }

  const loc_size = handleSize()

  return (
    <div className={`${loc_size} animate-bounce`}>
      <Tornado />
    </div>
  )
}
