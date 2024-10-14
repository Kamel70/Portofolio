import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done-animation.json";
import contactAnimation from "../../animation/contact-animation.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwzadve");
  return (
    <section id="contact" className="flex contact-section">
      <div className="body flex">
        <div className="head">
          <div className="header flex">
            <div className="icon-envelope"></div>
            <h1>Contact us</h1>
          </div>
          <p>
            Contact us for more information and Get notified when I publish
            something new.
          </p>
        </div>
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              autoComplete="off"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea required id="message" name="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          {state.succeeded && (
            <p className="flex">
              <Lottie
                style={{ height: 30 }}
                animationData={doneAnimation}
                loop={false}
              />{" "}
              Thanks for joining!
            </p>
          )}
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Waiting...." : "Submit"}
          </button>
        </form>
      </div>
      <div className="animation">
        <Lottie animationData={contactAnimation} loop />
      </div>
    </section>
  );
}
