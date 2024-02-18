import { NavigationDots, SocialMedia } from './componentsIndex'
import { motion } from 'framer-motion'

import styles from '../styles/Home.module.scss'



const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <motion.div
      id={idName}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 }}
      className={`${styles['app__container']} ${styles[`${classNames}`]}`}
    >
      <SocialMedia layout='global' />

      <div className={`${styles.app__wrapper} ${styles.app__flex}`}>
        <Component />
      </div>

      <NavigationDots active={idName} />
    </motion.div >
  )
}

export { AppWrap }