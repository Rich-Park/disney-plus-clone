// Style Imports
import "./Login.scss";

const Login = (props) => {
  return (
    <section className="container">
      <div className="container__content">
        <div className="cta">
          <img
            className="cta__logo-one"
            src="/images/cta-logo-one.svg"
            alt=""
          />
          <a className="cta__signup">GET ALL THERE</a>
          <p className="cta__description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img
            className="cta__logo-two"
            src="/images/cta-logo-two.png"
            alt=""
          />
        </div>
        <div className="container__bg" />
      </div>
    </section>
  );
};

export default Login;
