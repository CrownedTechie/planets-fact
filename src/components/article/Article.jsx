import styles from "./Article.module.css";

export const Article = ({ rotation, revolution, radius, temperature}) => {
 return ( 
  <article className={styles.article}>

   <article>
    <h3>rotation time</h3>
    <p>{rotation}</p>
   </article>

   <article>
    <h3>revolution time</h3>
    <p>{revolution}</p>
   </article>

   <article>
    <h3>radius</h3>
    <p>{radius}</p>
   </article>

   <article>
    <h3>average temp.</h3>
    <p>{temperature}</p>
   </article>

  </article>
 );
}