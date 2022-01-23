import styles from './Cate.module.scss'
export default function CateHeader(){
    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h1 className={styles.title}>Home / Women</h1>
            </div>
        </div>
    </div>
    )
}