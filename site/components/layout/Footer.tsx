import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div>
        <p className={styles.eyebrow}>联系</p>
        <p className={styles.title}>期待与 HR、团队面对面交流。</p>
        <p className={styles.body}>欢迎直接使用电话或微信联系我，约聊项目细节与到岗时间。</p>
      </div>
      <div className={styles.grid}>
<<<<<<< HEAD
        <span><a href="mailto:wanwindy@163.com">wanwindy@163.com</a></span>
=======
        <span>wanwindy@163.com</span>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
        <span>技术方向 · 前端 / 全栈</span>
        <span>坐标 · 成都 / 可远程</span>
        <span>到岗时间 · 随时</span>
      </div>
    </footer>
  );
}
