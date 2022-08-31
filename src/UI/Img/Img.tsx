import cn from 'classnames'
import styles from './Img.module.scss'

type ImgProps = {
  src?: string,
  alt?: string,
  shadow?: boolean,
}

const Img = ({ src = '', alt, shadow }: ImgProps) => {
  const imgSrc = src ? src : '../../../img/no-image.jpg'
  return (
    <>
      <img
        src={imgSrc}
        className={cn(styles.img_card, styles.thumbnail, { [styles.shadow]: shadow })}
        alt={alt}
      />
    </>
  )
}

export { Img }
