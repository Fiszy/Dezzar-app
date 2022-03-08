import styles from './Title.module.css'


export const Title = () => (
    <div>
        <div className={styles.SubTitles}>
            <h4>RELEASED THIS WEEK</h4>
            {/* <div className={styles.Line}></div> */}
            <div>
                <span className={styles.ArrowLeft}><i className="fas fa-chevron-left"></i></span>
                <span className={styles.ArrowRight}><i className="fas fa-chevron-right"></i></span>
            </div>
        </div>
    </div>
  );