import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'
import { SocialButton } from './SocialButton'
import LazyImage from '@/components/LazyImage'

export const Header = props => {
  return (
    <header
      style={{backgroundColor: `${siteConfig('AUTUMN_BANNER_BG_COLOR')}`}}
      className='w-full h-[430px] flex justify-center z-10'>
      <div
        style={{backgroundImage: `url(${siteConfig('HOME_BANNER_IMAGE')})`}}
        className={`max-w-[var(--content-width)] size-full px-5 flex justify-center items-center flex-col relative bg-cover bg-center`}>
        <div className='rounded-xl bg-white/[.6] w-full py-4 px-5 backdrop-blur-sm hover:scale-[1.03] transition duration-300 relative bottom-5'>
          <div className='flex items-center'>
            <LazyImage
              className='size-20 rounded-full shadow-lg pointer-events-none select-none'
              src={props?.avatar || siteConfig('AVATAR')}
            />
            <div className='flex flex-col flex-1 ml-7 size-full'>
              <h1 className='text-2xl my-0 text-[var(--theme-color)] drop-shadow-[0_2px_10px_rgba(231,156,0,0.6)] font-bold'>
                {props?.title || siteConfig('TITLE')}
              </h1>
              <div className='text-sm font-normal w-full text-gray-500 mt-2 flex jusitify-between'>
                <span className='flex-1'>{props?.description || siteConfig('DESCRIPTION')}</span>
                <SocialButton/>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute w-full bottom-0 px-5'>
          <MenuList {...props} />
        </div>
      </div>
    </header>
  )
}
