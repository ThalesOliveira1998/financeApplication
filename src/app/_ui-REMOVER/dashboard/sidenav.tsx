import styles from "@/app/ui/dashboard/sidenav.module.css";

export default function SideNav() {
    return (
        <section className={styles.container}>
            <section className={styles.moneySignalContainer}>
                <span className={styles.moneySignal}>
                    $
                </span>
            </section>
            
            <section className={styles.profileContainer}>
                <span className={styles.profileImage}></span>
            </section>
        </section>
    )
}