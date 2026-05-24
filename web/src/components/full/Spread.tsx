export default function Spread() {
  return (
    <section className="full-spread" id="founder">
      <div className="ed">
        {/* testimonial */}
        <div className="t-img" data-reveal>
          <span className="stamp">A word from the floor</span>
          <img
            src="https://images.pexels.com/photos/28517487/pexels-photo-28517487/free-photo-of-portrait-of-young-woman-with-soft-lighting.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1750&fit=crop"
            alt="Portrait, soft natural light"
          />
        </div>
        <div className="t-body">
          <blockquote data-reveal>
            &ldquo;We stopped <span>apologising</span> for the air in our
            office. The plants are still alive eight months in — the team
            writes more, calls less. It feels like the building{" "}
            <span>finally agrees</span> with us.&rdquo;
          </blockquote>
          <div className="who" data-reveal>
            <span className="nm">N. Krishnamurthy</span>
            <span className="role">
              Founder · a 40-person studio · Bengaluru
            </span>
          </div>
        </div>

        {/* founder, reversed */}
        <div className="f-body">
          <span className="lab" data-reveal>
            <span className="bar" /> vi.{" "}
            <span className="num">— the founder</span>
          </span>
          <h3 data-reveal>
            The studio is run, quietly, by <em>Angelina</em>.
          </h3>
          <p data-reveal>
            Trained as an interior architect in Milan and Delhi, Angelina opened
            the studio in 2022 with a single brief from a friend —{" "}
            <em>restructure my office before I lose the team to the air</em>.
          </p>
          <p data-reveal>
            Twelve rooms later, the practice still works the same way: a small
            team, four projects a quarter, every room <em>grown</em> rather
            than drawn. She is in the studio four days a week and on a floor
            the other three.
          </p>
          <span className="sign" data-reveal>
            Angelina ~
          </span>
          <span className="role">Founder &amp; principal · Studio 001</span>
        </div>
        <div className="f-img" data-reveal>
          <span className="stamp">In studio · today</span>
          <img
            src="https://images.pexels.com/photos/34472106/pexels-photo-34472106/free-photo-of-serene-portrait-of-smiling-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1750&fit=crop"
            alt="Portrait of Angelina, natural sunlight"
          />
        </div>
      </div>
    </section>
  );
}
