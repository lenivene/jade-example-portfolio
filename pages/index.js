import style from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.wrapper}>
        <header className={style.headerWrapper}>
          <div className={style.headerContainer}>
            <img src="/logo.png" alt="Jade" />
            <h1>
              Jade
            </h1>
          </div>
          <div>
            <p>
            Im a Product Designer with UI UX skills
            </p>
            <p>
            who love to build powerful and elegant products
            </p>
            <p>
            with x years of experience in the tech industry
            </p>
            <p>
            Im currently working at Lorem Ipsum.
            </p>
          </div>
        </header>
        <main className={style.mainContent}>
          <section className={style.project}>
            <img src="/projects/ecommerce-couto.jpg" alt="E-commerce de Couto" />
            <h2 className={style.projectTitle}>E-commerce de Couto</h2>
            <p>Enterprise - 2021</p>
          </section>
          <section className={style.project}>
            <img src="/projects/jade.jpg" alt="Sei lá da Jade" />
            <h2 className={style.projectTitle}>Sei lá da Jade</h2>
            <p>Enterprise - 2020</p>
          </section>
          <section className={style.project}>
            <img src="/projects/globonews.jpg" alt="Globo News" />
            <h2 className={style.projectTitle}>Globo News</h2>
            <p>Enterprise - 2009</p>
          </section>
          <section className={style.project}>
            <img src="/projects/uol.jpg" alt="UOL" />
            <h2 className={style.projectTitle}>UOL</h2>
            <p>Enterprise - 2021</p>
          </section>
        </main>
      </div>
    </>
  )
}