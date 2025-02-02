import styles from "./Article.module.css";

export const Article = () => {
 return ( 
  <article className={styles.article}>

   <article>
    <h3>rotation time</h3>
    <p>0.99 days</p>
   </article>

   <article>
    <h3>revolution time</h3>
    <p>224.7days</p>
   </article>

   <article>
    <h3>radius</h3>
    <p>6051.8km</p>
   </article>

   <article>
    <h3>average temp.</h3>
    <p>471°c</p>
   </article>

  </article>
 );
}