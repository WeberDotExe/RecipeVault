function About() {
  return (
    <main className="about-page">

      {/* Section 1 */}
      <section className="about-section about-intro">

        <div className="about-image">
          <img src="/aboutmain.png" alt="Cooking ingredients" />
        </div>

        <div className="about-content">
          <h2>About RecipeVault</h2>

          <p>
            RecipeVault is a simple and intuitive recipe application designed
            to help you explore new meals and organize your favorite dishes
            in one place. Whether you're discovering new recipes or saving
            the meals you love to cook, RecipeVault makes the experience easy
            and enjoyable.
          </p>
        </div>

      </section>


      {/* Section 2 */}
      <section className="about-section about-discover">

        <div className="about-content">

          <h2>Discover and Organize Recipes</h2>

          <p>
            Cooking becomes more enjoyable when everything is organized
            in one place. RecipeVault allows you to explore recipes from
            different cuisines while also giving you the ability to
            create and store your own personal dishes.
          </p>

        </div>

        <div className="about-images">

          <img src="/abouta.png" alt="Ingredients" />
          <img src="/aboutb.png" alt="Prepared dish" />

        </div>

      </section>


      {/* Section 3 */}
      <section className="about-section about-features">

        <div className="about-content">

          <h2>What You Can Do With RecipeVault</h2>

          <p>
            RecipeVault provides helpful features that make discovering
            and managing recipes simple. From exploring meals to saving
            your own creations, the app helps you keep everything organized
            in one place.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature">
            <span>🍲</span>
            <p>Browse recipes from different cuisines.</p>
          </div>

          <div className="feature">
            <span>🎥</span>
            <p>Watch cooking tutorials directly from recipes.</p>
          </div>

          <div className="feature">
            <span>➕</span>
            <p>Create your own recipes.</p>
          </div>

          <div className="feature">
            <span>✏️</span>
            <p>Edit or delete recipes anytime.</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;