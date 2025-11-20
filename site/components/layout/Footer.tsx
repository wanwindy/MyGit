import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div>
        <p className={styles.eyebrow}>{'\u8054\u7cfb'}</p>
        <p className={styles.title}>{'\u671f\u5f85 HR\u3001\u56e2\u961f\u5bf9\u9762\u4ea4\u6d41'}</p>
        <p className={styles.body}>{'\u6b22\u8fce\u76f4\u63a5\u901a\u8fc7\u7535\u8bdd\u6216\u5fae\u4fe1\u8054\u7cfb\u6211\uff0c\u7ea6\u804a\u9879\u76ee\u7ec6\u8282\u4ee5\u53ca\u5230\u5c97\u65f6\u95f4\u3002'}</p>
      </div>
      <div className={styles.grid}>
        <span>
          <a href="mailto:wanwindy@163.com">wanwindy@163.com</a>
        </span>
        <span>{'\u6280\u672f\u65b9\u5411 \xb7 \u524d\u7aef / \u5168\u6808'}</span>
        <span>{'\u5750\u6807 \xb7 \u6210\u90fd / \u53ef\u8fdc\u7a0b'}</span>
        <span>{'\u5230\u5c97\u65f6\u95f4 \xb7 \u968f\u65f6'}</span>
      </div>
    </footer>
  );
}
