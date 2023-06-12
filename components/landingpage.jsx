import React from 'react'
import styles from '../styles/landingpage.module.css'

const Home = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['navbar']}>
            </div>
            <div className={styles['hero']}>
                <div className={styles['header']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                        <path d="M810.667 640v-256c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496-14.293 67.285-37.504 90.496-55.125 37.504-90.496 37.504zM85.333 298.667c-23.552 0-42.667 19.115-42.667 42.667v384c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464h341.333c58.88 0 112.299-23.936 150.869-62.464s62.464-91.989 62.464-150.869c58.88 0 112.299-23.936 150.869-62.464s62.464-91.989 62.464-150.869-23.936-112.299-62.464-150.869-91.989-62.464-150.869-62.464h-42.667zM128 384h597.333v341.333c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504h-341.333c-35.371 0-67.285-14.293-90.496-37.504s-37.504-55.125-37.504-90.496zM213.333 42.667v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM384 42.667v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 42.667v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                    </svg>
                    <h1 className={styles['text05']}>
                        With our next-generation features, we&apos;re taking Java to a whole
                        new level!

                    </h1>
                    <span className={styles['text06']}>(Pun intended)</span>
                </div>
                <div className={styles['hero-image']}>
                    <img alt="image" src="/computer.svg" className={styles['image2']} />
                </div>
            </div>
            <div className={styles['who']}>
                <div className={styles['header2']}>
                    <span className={styles['heading']}>
                        <h2 className={styles['text05']}>Try Java Made Simpler ☕</h2>
                        <span className={styles['text04']}>
                            Try out our app and see for yourself how we&apos;re making Java
                        </span>
                    </span>
                    <a href='/basics'>
                        <button
                            className={` ${styles['button1']} ${styles['try-out']}`}>
                            Try it out
                        </button>

                    </a>
                </div>

                <div>
                    <img className={styles['image00']} src="./code.png" alt="" />
                </div>

                <div className={styles['header1']}>
                    <span className={styles['heading']}>
                        <h2 className={styles['text07']}>Nextra Integration 🌟</h2>
                        <span className={styles['text08']}>
                            Ready to be blown away? We&apos;ve used the incredible Nextra
                            framework to create an app that&apos;s as fast as your wildest
                            dreams! Nextra brings the magic of interactivity and real-time
                            updates to Java Made Simpler, making coding feel like a dance
                            party. 🎶✨
                        </span>
                    </span>
                    <a href="https://nextra.site/">
                        <button
                            className={` ${styles['button1']}`}>
                            What is Nextra?
                        </button>
                    </a>
                </div>

                <div>
                    <img className={styles['image00']} src="./markdown.png" alt="" />
                </div>

                <div className={styles['preview']}>
                    <div className={styles['image3']}>
                        <img alt="image" src="/preview.svg" className={styles['image4']} />
                    </div>
                    <div className={styles['video']}>
                        <video
                            src="https://www.youtube.com/watch?v=dZtrJYI5i-U"
                            poster="/video.svg"
                            loop
                            controls
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            className={styles['video1']}
                        ></video>
                    </div>
                </div>
                <div>
                    <img className={styles['image00']} src="./fill.png" alt="" />
                </div>
            </div>
            <div className={styles['information']}>
                <div className={styles['purpose']}>
                    <span className={styles['caption']}>What we do</span>
                    <span className={styles['description']}>
                        We&apos;re not just here for the hackathon, folks. Java Made Simpler
                        is here to change the game for developers everywhere! By simplifying
                        Java programming and adding a sprinkle of fun, we&apos;re breaking
                        barriers and inspiring a new generation of coding superheroes. Get
                        ready for faster coding, cleaner code, and epic levels of
                        productivity! 🚀💻
                    </span>
                </div>
            </div>
            <div>
                <img className={styles['image00']} src="./quiz.png" alt="" />
            </div>
            <div className={styles['book']}>
                <div className={styles['content']}>
                    <div className={styles['left']}>
                        <h2 className={styles['text09']}>
                            Hold your breath because Monaco, the superstar of code editors, is
                            joining the Java Made Simpler squad!
                        </h2>
                        <a href="https://microsoft.github.io/monaco-editor/">
                            <button className={` ${styles['button2']}`}>
                                <span className={styles['text10']}>What Is Monaco?</span>
                            </button>

                        </a>
                    </div>
                    <img alt="image" src="/message.svg" className={styles['image5']} />
                </div>
            </div>
        </div>
    )
}

export default Home
