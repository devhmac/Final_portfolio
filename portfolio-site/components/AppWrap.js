import { NavigationDots, SocialMedia } from './componentsIndex'

import styles from '../styles/Home.module.scss'



const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div
      id={idName}
      className={`${styles['app__container']} ${styles[`${classNames}`]}`}
    >
      <SocialMedia layout='global' />

      <div className={`${styles.app__wrapper} ${styles.app__flex}`}>
        <Component />
      </div>

      <NavigationDots active={idName} />
    </div >
  )
}

export { AppWrap }